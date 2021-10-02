import React, {useState} from 'react'
import './App.css'
import axios from "axios"
import * as Unsplash  from "unsplash-js";
import * as toJson  from "unsplash-js";

export const SearchPhoto = () => {
    const [photo, setPhoto] = useState('');
    const [clientId, setClientId] = useState('26RAa9zfbIHqE5UBbaI7RoTm7FEHi7WiGdV6eqmTUEo');

    const[ result, setResult]= useState([]);
   const handleChange = (event) => {
     setPhoto(event.target.value);
   }
   const handleSubmit = (event) => {
 console.log(photo);
 const url ="https://api.unsplash.com/search/photos/?page=1&query="+photo+"&client_id=" + clientId; 
  axios.get(url)
 .then((response) =>{
     console.log(response);
     setResult(response.data.results)
 })   
}

    return ( 
        <div>
            <div className="form">                                    
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          //value={query}
    onChange={handleChange}
        />
        <button type="submit" className="button" onClick={handleSubmit}>
          Search
        </button>
        </div> 
     <div className="card">
      {result.map((photo) =>(
          <img className="card--image" src={photo.urls.small}/>
      ))}
      </div>
        </div>
    )
}

