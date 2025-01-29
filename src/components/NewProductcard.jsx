import React from "react";
const NewproductCard = ({ imageUrl, product, handleSubmit }) => {
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
                <button className="submit" onClick={() => handleSubmit(product)}>Buy</button>
            </div>
        </div>
    )
}
export default NewproductCard;