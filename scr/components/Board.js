import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Square from "./Square";

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
  function reset() {
    setBoard([NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  }

  return (
    <View style={style.Flex}>
      {board.map((_, i) => (
        <Square
          index={i}
          key={i}
          board={board}
          setBoard={setBoard}
          player={player}
          setPlayer={setPlayer}
          squareStyle={style.Square}
        />
      ))}
      <Button title="Reset" onPress={reset} />
    </View>
  );
};
const style = StyleSheet.create({
  Flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "34%",
  },
});
