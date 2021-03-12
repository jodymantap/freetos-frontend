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
    <div className="container my-auto mx-auto">
      <div className="row">
      {
        name.map((names) => {
            return(
            <div className="col-md">
              <div className="">
                  <div className="card">
                    <img src={names.media.m} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-title"><b>{names.title}</b></p>
                      <p className="card-text">by {names.author.split(" ")[1].replace(/[^\w\s]/gi, '')}</p>
                      <span class="badge bg-dark">{names.tags.split(" ")[0]}</span>
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
