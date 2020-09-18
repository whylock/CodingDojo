import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ProductForm from '../components/ProductForm'
import { navigate } from '@reach/router'

const Main = (props) => {
    const initialProduct = {
        title: "",
        price: 0,
        desc:""
    }
    const [product, setProducts] = useState(initialProduct)

    const [errors, setErrors] = useState(initialProduct)

    useEffect(() => {
      return () => {
          Axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => setProducts(err))
      }
    }, [])
    
    const handleChange = (e) => {
        setProducts({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        Axios.get('http://localhost:8000/api/products/create/product', product)
            .then(res => {
                if (res.data.results) {
                    navigate('/')
                } else {
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err))
    }
    

    return (
        <div>
            <ProductForm
                inputs={product}
                errors={errors}
                handleChange={handleChange}
                handleSumbit={handleSumbit}
            />
        </div>
    )
}

export default Main