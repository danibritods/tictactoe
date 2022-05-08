import { useState } from "react"
import { View } from "react-native"
import Square from "./Square"


export default props => {
    const [board,setBoard] = useState([0,0,0,
                                    0,0,0,
                                    0,0,0])
    const [player, setPlayer] = useState(1)

    
    return(
        <View>
            <Square index={0} board={board} setBoard={setBoard} player={player} setPlayer={setPlayer}/>
            <Square index={1} board={board} setBoard={setBoard} player={player} setPlayer={setPlayer}/>
            <Square index={2} board={board} setBoard={setBoard} player={player} setPlayer={setPlayer}/>
        </View>
    )
}