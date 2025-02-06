import React, { Suspense } from "react";
import './NewAppPage.css';
import { withRouter } from "../util";
import ProductCard from './ProductCard';

const imageUrl = "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg";

const Loading = () => {
    return (
        <div>
            <h2>Loading.......</h2>
        </div>
    )
}
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

    handleNaviagtion = (data) => {
        const { product, imageUrl } = data;
        this.props.navigate('/product', {state: {...product, imageUrl: imageUrl}});
    }

    render() {
        console.log('New App Page');
        return (
            <Suspense fallback={<Loading />}>
                <div className="app">
                    <h1>New App Page</h1>
                    <div className="products-list">
                        {
                            this.state?.productList?.map((product, index) => {
                                return (
                                    <ProductCard
                                        key={`${product?.id}`}
                                        product={product}
                                        imageUrl={imageUrl}
                                        handleSubmit={(productprops) => {
                                            this.handleNaviagtion(productprops);
                                        }}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </Suspense>
        )
    }
}

const NewPage = withRouter(NewAppPage);

export default NewPage;

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

// function add(a,b){
//     return a+b;

// }
// const Add=add(3,5);
// console.log(Add);