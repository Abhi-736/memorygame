import { useState } from 'react'
import Card from './Card.jsx'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, color: 'red', stat: "" },
        { id: 1, color: 'red', stat: "" },
        { id: 2, color: 'yellow', stat: "" },
        { id: 2, color: 'yellow', stat: "" },
        { id: 3, color: 'blue', stat: "" },
        { id: 3, color: 'blue', stat: "" },
        { id: 4, color: 'purple', stat: "" },
        { id: 4, color: 'purple', stat: "" },
        { id: 5, color: 'brown', stat: "" },
        { id: 5, color: 'brown', stat: "" },
        { id: 6, color: 'pink', stat: "" },
        { id: 6, color: 'pink', stat: "" },
        { id: 7, color: 'orange', stat: "" },
        { id: 7, color: 'orange', stat: "" },
        { id: 8, color: 'grey', stat: "" },
        { id: 8, color: 'grey', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (<><h1>React Memory-Game</h1>
        <div className="container">
             
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
        </>
    )
}

export default Cards