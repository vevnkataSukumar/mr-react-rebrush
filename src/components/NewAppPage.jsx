import React from "react";
import './NewAppPage.css';
import { withRouter } from "../util";
import ProductCard from './ProductCard';

const imageUrl = "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg";
class NewAppPage extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            productList: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://api.restful-api.dev/objects')
        .then(function (response) {
            return response.json();
        })
        .then((result) => {
            this.setState({
                productList: result
            });
        })
        .catch(function (error) {
            console.log('error', error);
        })
    }

    handleSubmit = (data) => {
        this.props.navigate('/product', {state: {...data, imageUrl: imageUrl}});
    }

    render() {
        return (
            <div className="app">
                <h1>New App Page</h1>
                <div className="products-list">
                    {
                        this.state?.productList?.map((product, index) => {
                            return (
                                <ProductCard
                                    // key={product.id.toString()}
                                    key={`${product.id}`}
                                    product={product}
                                    imageUrl={imageUrl}
                                />
                                // <div className="product-card" key={index}>
                                //     <img src={imageUrl} alt="product" />
                                //     <div className="product-description">
                                //         <p>{product.name}</p>
                                //         {product.data?.capacity && (<p>{product.data?.capacity}</p>)}
                                //         {product.data?.color && (<p>{product.data?.color}</p>)}
                                //         {product.data?.price && (<p>{product.data?.price}</p>)}
                                //         <button className="submit" onClick={() => this.handleSubmit(product)}>Buy</button>
                                //     </div>
                                // </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const NewPage = withRouter(NewAppPage);

export default NewPage;

function add(a,b){
    return a+b;

}
const Add=add(3,5);
console.log(Add);