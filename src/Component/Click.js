import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Click() {
  let [Product, setProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        
        setProduct(response.data);
      })
      .catch(function (error) {
        setProduct(error);
      })
  }, [id])

  return (
    <>
      <div>
        <img src={Product.thumbnail}></img>
      </div>
    </>
  )
}
