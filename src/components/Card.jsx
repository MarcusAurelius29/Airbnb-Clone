import eminem from '../images/eminem.jfif'

function Card(props) {
   return (
    <div className='card'>
        <img src={props.img} alt='image' className='card-image'></img>
        <div className='card-details'>
        <p className='rating'>{props.rating}</p>
        <p>{props.name}</p>
        <strong className='price'>{props.price}</strong> 
        </div>
    </div>
   )
}

export default Card