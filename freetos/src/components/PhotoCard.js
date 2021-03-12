import React, {useState, useEffect} from 'react';
import axios from 'axios';


function PhotoCard() {
  const [name, setName] = useState([]);
  useEffect(() => {
        axios.get(
        "http://localhost:5000/api"
        )
        .then(response => {
            console.log("INI RESPONSE",response.data[0]);
            setName(response.data[0]);
        })
  }, [])
  return (
    <div className="container row-cols-2">
      <div className="">
      {
        name.map((names) => {
            return(
            <div className="col">
              <div className="">
                  <div className="card">
                    <img src={names.media.m} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{names.title}</h5>
                      <p className="card-text">by {names.author.split(" ")[1]}</p>
                      <span class="badge bg-dark">Tag</span>
                    </div>
                  </div>
              </div>
            </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default PhotoCard;
