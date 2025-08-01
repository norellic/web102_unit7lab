import { useState } from 'react'
import './Card.css'
import more from './more.png'
import like from '../assets/thumbs-up.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1)
  }

  return (
      <div className="Card" >
        <Link to={'edit/'+ props.id} ><img className="moreButton" alt="edit button" src={more} /></Link>

        <div className="cardContent">
          <h2 className="name" style={{ color: props.color }}>{props.name}</h2>
          <h3 className="author">{"by " + props.author}</h3>
          
          <div className="cardDetailsFooter" >
            <Link to={'/detail/'+ props.id}><h3 className="seeDetails">See Details</h3></Link>
            <button className="likeButton" onClick={updateCount} > <img className="likeImg" alt="like button" src={like}/>{count}</button>
          </div>
        </div>
      </div>
  );
};

export default Card