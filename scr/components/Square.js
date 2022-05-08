import { useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native"



export default props =>{
  const [squareState, setSquareState] = useState("") 

  function onPress(){
    console.log(props.index,props.player)
    setSquareState(props.player)
    props.setPlayer( ((props.player+1)%2) )
    // props.setBoard(props.board[props.index] = props.player)

    
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
        
 