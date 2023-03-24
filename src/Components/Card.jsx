function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <div  style={{backgroundColor:item.color,height:'150px',width:'150px'}}></div> 
        </div>
    )
}

export default Card