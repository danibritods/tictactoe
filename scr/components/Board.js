import { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Square from "./Square";

const l = 50;

export default (props) => {
  const [board, setBoard] = useState([
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
    NaN,
  ]);
  const [player, setPlayer] = useState(1);
  const players = ["O","X"];
  const [gameText, setGameText] = useState("X plays:");

  function reset() {
    setBoard([NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
    setPlayer(1);
    setGameText("X plays:")
  }

  function checkWiner(board,move) {
    return checkTriplets(generateTriplets(board,move))
  }//TODO create a winner hook, implement checkwiner 
  
  return (
    <>
    <Text style={style.title}> {gameText} </Text>
    <View style={style.flex}>
      {board.map((_, i) => (
        <Square
        index={i}
        key={i}
        board={board}
        setBoard={setBoard}
        player={player}
        players={players}
        setPlayer={setPlayer}
        style={style.buttonSize}
        setGameText={setGameText}
        />
        ))}
      <Button title="Reset" onPress={reset} />
    </View>
    </>
  );
};
const style = StyleSheet.create({
  flex: {
    //maxHeight: 10,
    flexDirection: "row",
    //justifyContent: "space-between",
    //alignItems: "flex-start",
    flexWrap: "wrap",
    minWidth: (l + 30 + 2) * 3,
    maxWidth: (l + 30 + 2) * 3,
  },
  buttonSize: {
    minHeight: l,
    minWidth: l,
    maxHeight: l,
    maxWidth: l,
  },
    title: {
    fontSize: 25,
    // lineHeight: 21,
    fontWeight: "bold",
    // letterSpacing: 0.01,
    color: "Grey",
    alignContent: "center"
  },
});
