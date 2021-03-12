import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardLoading from './CardLoading';


function PhotoCard() {
  const [name, setName] = useState([]);
  let [loading, Loaded] = useState(true);
  let [tag, setTag] = useState(localStorage.getItem("tag"));
  useEffect(() => {
        axios.get(
        `http://localhost:5000/${tag ? tag : "all"}`
        )
        .then(response => {
            console.log("INI RESPONSE",response.data[0]);
            setName(response.data[0]);
            Loaded(false);
        })
  }, [])
  return (
    <div className="container my-auto mx-auto">
      {loading ? <CardLoading/> : (
      <div className="row">
      {
        name.map((names) => {
            return(
            <div className="col-md">
              <div className="">
                  <div className={`card hover:shadow-2xl ${loading ? 'animate-pulse' :null}`}>
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
      ) }
    </div>
  )
}

export default PhotoCard;
