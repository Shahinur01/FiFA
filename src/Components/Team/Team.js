import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Team = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
    return (
        <>
            <Col lg={3} md={6} sm={12} xs={12}>
                <Card className="text-center py-4 mb-3">
                    <Card.Img variant="top" src={strTeamBadge} style={{ width: '50%', margin: '0 auto', marginTop: '1rem', }} />
                    <Card.Body>
                        <h1 className="font-weight-bold"> {strTeam} </h1>
                        <Card.Title className="font-weight-bold mb-5"> Sports Type : {strSport} </Card.Title>
                        <Link to={"/Detail/" + idTeam} > <Button variant="danger" size="lg"> Explore <FaLongArrowAltRight /> </Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Team;