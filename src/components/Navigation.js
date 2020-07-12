import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">React Redux Cart</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Navigation;