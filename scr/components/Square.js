import { useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native"



export default props =>{
  const [squareState, setSquareState] = useState("") 

  function onPress(){
    setSquareState(props.player)
    props.setPlayer( ((props.player%2)+1) )
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
        
 