
function Card(props) {
    let badgeText

    if(props.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    console.log(props.location)

    return (
    <div className='card'>
        {badgeText && <div className="card-badge">{badgeText}</div>}   
        <img src={props.img} alt='image' className='card-image'></img>
        <div className='card-details'>
        <p className='rating'>{props.rating} - USA</p>
        <p>{props.name}</p>
        <strong className='price'>{props.price}$/person</strong> 
        </div>
    </div>
   )
}

export default Card