function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <div className="small" style={{backgroundColor:item.color,height:'110px',width:'90%'}}></div> 
        </div>
    )
}

export default Card