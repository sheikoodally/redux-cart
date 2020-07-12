import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartItems = ({item:{title, img, amount, price}}) => {
    return (
        <div>
        <Row>
            <Col xs={12} md={5}>
                <Card className= "cardBg" style={{ width: '25rem' }}>
                    <Card.Img className= "test" variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        ${price}
                        </Card.Text>
                        <Button className="removeBtn">Remove</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={8} md={4}>
            <div className="justifyCenter">
                <h3>{title}</h3>
                <h3>${price}</h3>
                <button className="removeBtn"> Remove </button>
            </div>
            </Col>

            <Col xs={4} md={3}>
                {/* increase amount */}
                <button className="amount-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>

                {/* amount */}
                <p className="amount"> {amount}</p>

                {/* decrease amount */}
                <button className="amount-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
            </Col>

        </Row>
        </div>
    )
}

export default CartItems;