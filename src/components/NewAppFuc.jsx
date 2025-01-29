import React, { useState, useEffect } from "react";
import './NewAppPage.css';
import { useNavigate } from "react-router-dom";
import NewProductcard from './NewProductcard';

const imageUrl = "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg";

const NewApp = () => {
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://api.restful-api.dev/objects')
            .then((response) => response.json())
            .then((result) => {
                setProductList(result);
            })
            .catch(function (error) {
                console.log('error fetching data:', error);
            });
    }

    const handleNaviagtion = (data) => {
        navigate('/product', { state: { ...data, imageUrl } })
    }

    return (
        <div className="app">
            <h1>New App Page</h1>
            <div className="products-list">
                {
                    productList?.map((product) => {
                        return (
                            <NewProductcard
                                key={`${product?.id}`}
                                product={product}
                                imageUrl={imageUrl}
                                handleSubmit={() => handleNaviagtion(product, imageUrl)}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}
export default NewApp;
