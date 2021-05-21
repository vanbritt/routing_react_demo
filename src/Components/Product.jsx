import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Link } from 'react-router-dom';

const Products = ({match})=> <p>{match.params.id}</p>


class Product extends Component {
    constructor(){
        super();
        this.state={
            products: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:6700/product", {method: 'GET'}).then((response) => response.json()).then((data)=>{
            this.setState({products: data})

        })
    }

    render() {
    console.log(this.state.products);

        return (
            <div>
                <h1>Product</h1>
                <div>Select a Product</div>
                <div>
                    <Router>
                        <ul>
                            <li>
                                <Link to="/Product/Secret, Alchemist, SCOOP">Book</Link>
                            </li>
                            <li>
                                <Link to="/Product/Addgel, Trimax, Scello">Pen</Link>
                            </li>
                        </ul>
                        <Route path="/Product/:id" component={Products}/>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Product
