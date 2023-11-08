import React, {Component}  from "react";
class Product extends Component{
    state={
        product_Name:'Lenovo ThinkPad',
        price:27000,
        qty:1,
        image:'https://rukminim2.flixcart.com/image/224/224/xif0q/computer/n/i/e/15amn7-thin-and-light-laptop-lenovo-original-imagsvykgkecffgr.jpeg?q=90'
    }

    render(){
        return <div className="container">
            
            <pre>
                {JSON.stringify(this.state)}
            </pre>
            <div className="container">
            <h3>Product Details</h3>
                <div className="row">
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.image} width="100px"/></td>
                                    <td>{this.state.price}</td>
                                    <td>{this.state.qty}</td>
                                    <td>{this.state.price*this.state.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    }
}
export default Product