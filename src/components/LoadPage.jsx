import React from "react";
import './LoadPage.css';
import { withRouter } from "../util";

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const productData = this.props.location.state || {};
        return (

            <div className="load">
                <div>
                    <img src={productData?.imageUrl} alt="product"></img>
                </div>
                <div className="description-sec">
                    <h2>{productData?.name}</h2>
                    {productData?.data?.capacity && (<p>{productData?.data?.capacity}</p>)}
                    {productData?.data?.color && (<p>{productData?.data?.color}</p>)}
                    {productData?.data?.price && (<p className="price">Rs {productData?.data?.price}/-</p>)}
                </div>
            </div>
        )
    }
}

const ProductDetailsPage = withRouter(ProductDetails);

export default withRouter(ProductDetailsPage);