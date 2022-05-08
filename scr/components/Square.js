import { useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native"



export default props => {
  const [squareState, setSquareState] = useState("") 

  function checkWinner(){
    let b = props.board

    if(
    (b[0] + b[1] + b[2])%3 || 
    (b[3] + b[4] + b[5])%3 || 
    (b[6] + b[7] + b[8])%3 || 
    
    (b[0] + b[3] + b[6])%3 || 
    (b[1] + b[4] + b[7])%3 || 
    (b[2] + b[5] + b[8])%3 || 

    (b[1] + b[4] + b[8])%3 || 
    (b[6] + b[4] + b[2])%3
    ){
      console.warn("Winner!")
      return(-1) //TODO 1. stablish a logic to return the winner 2. break the logic into smaller steps
    }
    return(0)

  }

  function onPress(){
    setSquareState(props.player) //TODO map 0,1 to X and O in the button title
    props.setPlayer( ((props.player+1)%2) )
    props.board[props.index] = props.player
    props.setBoard(props.board)
    console.log(props.board)
    checkWinner()
    
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
        
 