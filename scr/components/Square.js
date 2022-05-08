import { useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native"



export default props => {
  const [squareState, setSquareState] = useState("") 

  function checkWinner(){
    let b = props.board 
    (b[0] + b[1] + b[2])

  }

  function onPress(){
    setSquareState(props.player) //TODO map 0,1 to X and O in the button title
    props.setPlayer( ((props.player+1)%2) )
    props.board[props.index] = props.player
    props.setBoard(props.board)
    console.log(props.board)

    
  }

  return(   
    // <View style={
    //   {
    //     height:40,
    //     width:40,
    //     backgroundColor: props.color || '#000'
    //   }}>
    <View>
            <Button
              onPress={onPress}
              title={squareState}
              key={props.key}
              />
          </View>
  ) 
  }
        
 