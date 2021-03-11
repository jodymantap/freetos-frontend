import React, {useState, useEffect} from 'react';
import axios from 'axios';


function PhotoCard() {
  const [name, setName] = useState([]);
  useEffect(() => {
        axios.get(
        "http://localhost:5000/api"
        )
        .then(response => {
            console.log("INI RESPONSE",response.data);
            setName(response.data);
        })
  }, [])
  return (
    <div>
      {
        name.map((names) => {
            return(
            <div>
                <h1>{names.first_name}</h1>
            </div>
            )
        })
      }
      <div className="card" style={{width: 18 + "rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard;
