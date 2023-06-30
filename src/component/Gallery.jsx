import React, { useEffect, useState } from 'react'
import './gallery.css'
const Gallery = () => {
    const [Data,SetData]=useState([])
    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=s0dv0FSRydEa2ZjPMzK63I2GUO8rgOFAVe6pgu3mPnA")
          .then((res) => res.json())
          .then((result) => SetData(result));
       
      }, []);
    
  return (
    <>
    <h1 style={{textAlign:"center",color:"rgb(145, 5, 59)"}}>Image Gallery</h1>
    {
      Data.length>0 ?(
        <div className="container">
    {
        Data.map((e)=>(
            
    <div style={{backgroundImage: `url(${e.urls.full})`,  backgroundRepeat:"no-repeat",backgroundSize: "cover" }} className="main">
            <p className='content'>{e.user.first_name}</p>
            <p className='date'>{e.created_at}</p>
        </div>
        ))
    }
      </div>
      ): <h1 style={{textAlign:"center",color:'red'}}>Please Wait Image is Loading</h1>
    }
    
    </>
  )
}

export default Gallery
