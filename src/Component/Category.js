import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import '../App.css';

import axios from 'axios';
// import Smartphones_all from './Smartphones_all';


import '../App.css';

import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';


function Category() {

    let [Category, setCategory] = useState(null);
    let [Product, setProduct] = useState(null);
    let [data, setdata] = useState([]);
  

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                setCategory(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                setCategory(error);
            })
        axios.get(`https://dummyjson.com/products`)
            .then(function (response) {
                setProduct(response.data.products);
                setdata(response.data.products);
            })
            .catch(function (error) {
                setProduct(error);
            })
    }, [])



    const getdata = (ele) => {
        let z = 'https://dummyjson.com/products/category/';
        let x = ele.charAt(0).toUpperCase() + ele.slice(1)
        z = z.concat(x)
        axios.get(z)
            .then(function (response) {
                // console.log(response)
                setProduct(response.data.products);

                setdata(response.data.products);
            })
            .catch(function (error) {
                setProduct(error);
            })

        // const a = data.filter((elemet) => {
        //     return elemet.category == ele
        // })
        // setProduct(a)


    }

    return (
        <div className="demo w-100">
            <div className='scroll'>
                {
                    Category != null && Category.map((ele) => {
                        return (
                            <div className="line">
                                <div className='line2'>
                                    <li style={{ cursor: 'pointer' }} className='fs-5 p-1' onClick={() => { getdata(ele) }}>{ele}<div className="inline"></div></li>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='Product-mm'>
                <div className='w-100'>

                    <div >
                        <Link to="Click" className='Product d-flex '>
                            {
                                // console.log(Product)
                                Product != null && Product.map((item) => {
                                    return (
                                        // <div className="w-33 Productm">
                                        <Card style={{ width: '31%' }} as={Link} to={`/Click/${item.id}`}>
                                            <Card.Img className='img-fix' variant="top" src={item.thumbnail} />
                                            <Card.Body className='fix-card'>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Title>${item.price}</Card.Title>
                                                <CardTitle>{item.category}</CardTitle>
                                                <p>{item.rating}</p>
                                                <Button className='w-100'>Buy</Button>
                                            </Card.Body>
                                        </Card>
                                        // </div>
                                    )
                                })
                            }
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Category;
