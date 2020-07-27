import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {INCREASE, DECREASE, REMOVE} from '../components/Action';
import {connect} from 'react-redux';

const CartItems = ({item:{title, img, amount, price}, remove, increase, decrease}) => {
    return (
        <div>
        <Row>
            <Col className= "cardBg" xs={12} md={5}>
                <Card className= "cardBg" >
                    <Card.Img className= "cardImg" variant="top" src={img}/>
                </Card>
            </Col>

            <Col xs={7} md={3} className="descr">
            <div className="justifyCenter">
                <h5 className="spaceFont">{title}</h5>
                <h6 className="spaceFont">${price}</h6>
                <button className="removeBtn" onClick={ () => remove()}> Remove </button>
            </div>
            </Col>

            <Col xs={4} md={3} className="adding">
                <div className="addingDiv">
                {/* increase amount */}
                <button className="amount-btn" onClick={ () => increase()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>

                {/* amount */}
                <p className="amount" > {amount}</p>

                {/* decrease amount */}
                <button className="amount-btn" onClick={ () => decrease()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
                </div>
            </Col>
            
            <Col xs={12} md={12} className="seperationDiv">
                <div className="separation"></div>
            </Col>  

        </Row>
        </div>
    )
}
//not mapping values to props
const mapDispatchToProps = (dispatch, ownProps) =>{

    const {id, amount} = ownProps.item;

    console.log(ownProps);
    //function - will run when users click on remove button
    return{ 
        remove: () => dispatch({type:REMOVE, payload: {id: id}}),
        increase: () => dispatch({type:INCREASE, payload: {id: id, amount:amount}}),
        decrease: () => dispatch({type:DECREASE, payload: {id: id, amount:amount}})
    };
};

export default connect(null, mapDispatchToProps)(CartItems);