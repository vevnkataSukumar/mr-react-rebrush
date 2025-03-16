import React, { useState, useEffect, Suspense } from "react";
import './NewAppPage.css';
import { useNavigate } from "react-router-dom";
import NewProductcard from './NewProductcard';
import axios from "axios";

const imageUrl = "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg";

const NewApp = () => {
    const navigate = useNavigate();

    const handleNaviagtion = (data) => {
        navigate('/product', { state: { ...data, imageUrl } })
    }

    return (
        <div className="app">
            <h1>New App Page</h1>
            <DataComponent handleNaviagtion={handleNaviagtion} />
        </div>
    )
}


function DataComponent(props) {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://api.restful-api.dev/objects')
            .then(res => {
                console.log(res);
                setProductList(res?.data);
            })
            .catch(err => {
                console.log('error fetching data:', err);
            })
    }

    return (
        <div className="products-list">
            {
                productList && productList?.map((product) => {
                    return (
                        <NewProductcard
                            key={`${product?.id}`}
                            product={product}
                            imageUrl={imageUrl}
                            handleSubmit={() => props.handleNaviagtion(product, imageUrl)}
                        />
                    )
                })
            }
        </div>
    );
}

export default NewApp;
