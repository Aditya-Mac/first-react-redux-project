import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop } from '../redux/actions/action'
import './shop.css'

class Shop extends Component {


    render() {
        return (
            <div>
                <h1 className="title">welcome to shop</h1>
                <div className="item">
                    <h3 ID="hp">HP laptops</h3>
                    <div className="number">
                        {this.props.numOfLaptops > 0 ? <h3>Avaliable : {this.props.numOfLaptops}</h3> : <h3>Oops! out of stock</h3>}
                        <br />
                        {this.props.numOfLaptops > 0 ? <button onClick={this.props.buyLaptop} className="btn btn-outline-dark">Buy</button> : ""}
                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = (state) => {
    return {
        numOfLaptops: state.numOfLaptops
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyLaptop: () => dispatch(buyLaptop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);