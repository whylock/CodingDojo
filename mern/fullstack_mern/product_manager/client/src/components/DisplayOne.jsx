import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const ShowOne = (props) => {
    const [product, setProducts] = useState([])
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProducts(res.data.results))
        .catch(err => setProducts(err));        
    }, [props])
    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.desc}</p>
        </div>
    )
}

export default ShowOne
