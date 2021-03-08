// import  from '@material-ui/core/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div>
            <Navbar className="m-3" bg="dark" variant="dark">
                <Nav className="m-auto">
                    <Nav.Link href=""><Link className="enter-btn mr-3" to="/home">About us</Link></Nav.Link>
                    <Nav.Link href=""><Link className="enter-btn mr-3" to="/home">News</Link></Nav.Link>
                    <Nav.Link href=""><Link className="enter-btn mr-3" to="/home">Event</Link></Nav.Link>
                    <Nav.Link href=""><Link className="enter-btn mr-3" to="/home">Donate</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 ml-5" />
                    <Button className= "enter-btn" variant="outline-info">Search</Button>
                </Form>
                <Form inline>
                    <Button className= "enter-btn ml-5 rounded-circle" variant="outline-info">Sign in</Button>
                </Form>
                <Form inline>
                    <Button className= "enter-btn ml-3 rounded-circle" variant="outline-info">Sign up</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default NavBar;
