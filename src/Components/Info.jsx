import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';

const Info = ({data}) => {
    // console.log(data)
    const {id}=useParams()
    console.log(typeof(id))
    // console.log(id)
    const product=data.find(el=>el.id==id)
  return (

    <div>
        <h1>{product.name}</h1>
        <img src={product.pic} alt={product.name} />
        <h3>{product.price}</h3>
        <h2>Product Video</h2>
        <ReactPlayer url={product.videoUrl} controls />
    </div>
  )
}

export default Info