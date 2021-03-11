import React from 'react';
import { Container } from 'react-bootstrap';
import AllTeam from '../AllTeam/AllTeam';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
            <AllTeam />
            </Container>
        </>
    );
};

export default Home;