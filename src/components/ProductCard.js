const ProductCard = (props) => {
    const {imageUrl, product, handleSubmit, key} = props;
    return (
        <div className="product-card" key={key}>
            <img src={imageUrl} alt="product" />
            <div className="product-description">
                <p>{product?.name}</p>
                {product?.data?.capacity && (<p>{product?.data?.capacity}</p>)}
                {product?.data?.color && (<p>{product?.data?.color}</p>)}
                {product?.data?.price && (<p>{product?.data?.price}</p>)}
                {/* callback function */}
                <button className="submit" onClick={() => handleSubmit(props)}>Buy</button>
            </div>
        </div>
    )
}

export default ProductCard;