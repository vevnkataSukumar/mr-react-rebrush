import React,{ useState,useEffect } from "react";
import './NewAppPage.css';

const imageUrl = "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg";

const NewCard=()=>{
    const [listProduct,setListProduct]=useState([]);

    useEffect(()=>{
        Datafetch();
    },[]);

    const Datafetch=()=>{
        fetch('https://api.restful-api.dev/objects')
            .then((response)=>response.json())
            .then((results)=>{
                setListProduct(results);
            })
            .catch(function(error){
                console.log('error:', error);
            });
        
    }
    return(
        <div className="app">
            <h1>New App page</h1>
            <div className="products-list">
                {
                    listProduct?.map((product)=>{
                        return (
                            <div className="product-card">
                                <div>
                                    <img src={imageUrl} alt="product" />
                                    <div className="product-description">
                                        <p>{product?.name}</p>
                                        {product?.data?.capacity && (<p>{product?.data?.capacity}</p>)}
                                        {product?.data?.color && (<p>{product?.data?.color}</p>)}
                                        {product?.data?.price && (<p>{product?.data?.price}</p>)}
                                    </div>
                                </div>
                                <div>
                                    <button className="submit"> Buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default NewCard
