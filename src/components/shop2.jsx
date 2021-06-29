import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop } from '../redux/actions/action'
import './shop.css'

class Shop2 extends Component {


    render() {
        return (
            <div>

                <div className="item">

                    <div className="number">

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

export default connect(mapStateToProps, mapDispatchToProps)(Shop2);