import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartItems = ({item:{title, img, amount, price}}) => {
    return (
        <div>
        <Row>
            <Col className= "cardBg" xs={12} md={5}>
                <Card className= "cardBg" >
                    <Card.Img className= "test" variant="top" src={img}/>
                </Card>
            </Col>

            <Col xs={7} md={3} className="descr">
            <div className="justifyCenter">
                <h5 className="spaceFont">{title}</h5>
                <h6 className="spaceFont">${price}</h6>
                <button className="removeBtn"> Remove </button>
            </div>
            </Col>

            <Col xs={4} md={3} className="adding">
                <div className="addingDiv">
                {/* increase amount */}
                <button className="amount-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>

                {/* amount */}
                <p className="amount" > {amount}</p>

                {/* decrease amount */}
                <button className="amount-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
                </div>
            </Col>
            
            <Col xs={12} md={12}>
                <div className="separation"></div>
            </Col>  

        </Row>
        </div>
    )
}

export default CartItems;