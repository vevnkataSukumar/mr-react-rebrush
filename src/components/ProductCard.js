const ProductCard = (props) => {
    console.log(props);
    return (
        <div className="product-card" key={index}>
            <img src={props.imageUrl} alt="product" />
            <div className="product-description">
                <p>{product.name}</p>
                {product.data?.capacity && (<p>{product.data?.capacity}</p>)}
                {product.data?.color && (<p>{product.data?.color}</p>)}
                {product.data?.price && (<p>{product.data?.price}</p>)}
                <button className="submit" onClick={() => this.handleSubmit(product)}>Buy</button>
            </div>
        </div>
    )
}

export default ProductCard;