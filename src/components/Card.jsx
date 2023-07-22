
function Card(props) {
    let badgeText

    if(props.name.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.name.location === "Online") {
        badgeText = "ONLINE";
    }

    console.log(props.name.location)

    return (
    <div className='card'>
        {badgeText && <div className="card-badge">{badgeText}</div>}   
        <img src={props.name.img} alt='image' className='card-image'></img>
        <div className='card-details'>
        <p className='rating'>{props.name.rating} - USA</p>
        <p>{props.name.name}</p>
        <strong className='price'>{props.name.price}$/person</strong> 
        </div>
    </div>
   )
}

export default Card