import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./card.css";


function Card() {
    const [title, setTitle] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8055/items/Articles', {
        headers:{
            "Content-Type": 'application/json',
        }
      }).then((response) => {
        setTitle(response.data.data);
      });
    }, []);
  
    const cards = title
    console.log(cards);
  
    const showCards = cards.map(element => {
      return(
        <div className="card">
            <img src={"http://localhost:8055/assets/" + element.image} alt="" />
            <h3>{element.title}</h3>
            <p>{element.shortcontent}</p>
        </div>
      )
    })
  
  return (
    <>
        {showCards}
    </>
  )
}

export default Card