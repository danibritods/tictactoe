import { useState } from "react"
import { View, StyleSheet } from "react-native"
import Square from "./Square"


export default props => {
    const [board,setBoard] = useState([0,0,0,
                                    0,0,0,
                                    0,0,0])
    const [player, setPlayer] = useState(1)

    
    return(
        <View style={style.Flex}>
            {board.map((_,i) => <Square index={i} key={i} board={board} setBoard={setBoard} player={player} setPlayer={setPlayer} squareStyle={style.Square}/>)}
        </View>
    )
}
const style=StyleSheet.create({
    Flex: {
        flexDirection: 'row',
        with: '10',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Square: {
        height: 40,
        width: 40
    }
})