import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {connect} from 'react-redux';

const Navigation = ({amount}) => {

    return (
        <div>
            <Navbar className="NavBg" bg="dark" variant="dark">
                <Navbar.Brand href="" className="navFont">React Redux Cart</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <div className="nav-container">
                        <svg className="navSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                        </svg>
                        <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {amount:state.amount}
}
export default connect(mapStateToProps)(Navigation);