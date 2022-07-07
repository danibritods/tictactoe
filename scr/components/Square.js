import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Button, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
  const [squareState, setSquareState] = useState("_");

  function checkWinner() {
    let b = props.board;

    if (
      (b[0] + b[1] + b[2]) % 3 === 0 ||
      (b[3] + b[4] + b[5]) % 3 === 0 ||
      (b[6] + b[7] + b[8]) % 3 === 0 ||

      (b[0] + b[3] + b[6]) % 3 === 0 ||
      (b[1] + b[4] + b[7]) % 3 === 0 ||
      (b[2] + b[5] + b[8]) % 3 === 0 ||
      
      (b[1] + b[4] + b[8]) % 3 === 0 ||
      (b[6] + b[4] + b[2]) % 3 === 0
    ) {
      console.warn("Winner!");
      return true; //TODO 2. break the logic into smaller steps 3. Maybe something using reduce
    }

    return false;
  }

  function symbol(x) {
    if (isNaN(x)) {
      return "_";
    }
    return x == 1 ? "X" : "O";
  }

  function onPress(){
    if(isNaN(props.board[props.index]) && props.player > -1){
      props.board[props.index] = props.player;
      props.setBoard(props.board);
      console.log(props.board);
      if(checkWinner()){
        console.warn(symbol(props.player) + " WINS!!");
        props.setGameText(symbol(props.player) + " WINS!!");
        props.setPlayer(-1);
      }
      else{
        props.setPlayer((props.player + 1) % 2);
        props.setGameText("Player: "+symbol(props.player+1));
      }
    }
    if(props.board.filter(x=>isNaN(x)).length === 0){
      console.warn("Deu velha!!");
      props.setGameText("GAME OVER!");
    }      
  }


  return (
    <TouchableOpacity
      style={[style.button, props.style]}
      onPress={onPress}
      index={props.index}
    >
      <Text style={style.text}>{symbol(props.board[props.index])}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 4,
    backgroundColor: "grey",
    overflow: "hidden",
    margin: 1,
    textAlignVertical: "bottom",

    
  },
  text: {
    fontSize: 80,
    // fontFamily: "serif",
    lineHeight: 21,
    fontWeight: "light",
    letterSpacing: 0.01,
    color: "white",
    textAlignVertical: "bottom"
  },
});
