import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './contactInfo.css';

export default function ContactInfo(){

const API_URL ="https://random-data-api.com/api/v2/users";

let { id } = useParams();

const[info, setInfo] = useState();

useEffect(()=>{
  const url = API_URL + "?size=10";
  fetch(API_URL)
            .then(data => data.json())
            .then(data => setInfo(data));
},[])

if (info) {
  return (
  <div>
  <img src = {info.avatar}/>
  <p>{info.first_name} {info.last_name}<br></br>
  {info.phone_number}<br></br>{info.email}<br></br>
   </p> 
  </div>
)}
else {
  return <p>Data is being fetched...</p>
}
}

