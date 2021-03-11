import React, {useState, useEffect} from 'react';
import axios from 'axios';


function PhotoCard() {
  const [name, setName] = useState([]);
  useEffect(() => {
        axios.get(
        "http://api.flickr.com/services/feeds/photos_public.gne?tags=all&format=json&nojsoncallback=true"
        )
        .then(response => {
            console.log("INI RESPONSE",response.data.items);
            setName(response.data.items);
        })
  }, [])
  return (
    <div className="container">
      {
        name.map((names) => {
            return(
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
            )
        })
      }
    </div>
  )
}

export default PhotoCard;
