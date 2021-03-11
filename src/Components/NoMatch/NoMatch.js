import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <Container>
            <Jumbotron className="text-center shadow-sm mt-5 py-5">
                <h1 className="display-1 font-weight-bold" > 404 </h1>
                <h2 className="display-5 font-weight-bold py-3" > Oops! Something is wrong </h2>
                <p>
                    <Link to="/home"> <Button variant="dark" className="w-25" size="lg">Go back in initial page</Button> </Link>
                </p>
            </Jumbotron>

        </Container>
    );
};

export default NoMatch;