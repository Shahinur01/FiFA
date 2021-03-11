import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import male from '../../images/male.png'
import female from '../../images/female.png'
import { GoLocation } from 'react-icons/go';
import { FaFlag, FaFacebook, FaYoutube, FaTwitter, FaHome } from 'react-icons/fa';
import { BiFootball } from 'react-icons/bi';
import { CgGenderMale } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const Detail = () => {
    let { idTeam } = useParams();
    console.log(idTeam);
    const [teams, setTeams] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        // console.log(url);
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                setTeams(data && data.teams[0])

                document.getElementById('spinner').style.display = 'none';

            })
    }, [idTeam])
    return (
        <>
            <div id="spinner" className="loaders">
                <div className="indicator"></div>
            </div>

            <div className="text-center overly shadow-lg">
                <img src={teams.strTeamBanner} alt="" style={{ width: '100%' }} />
            </div>

            <Container className="py-2">
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Card className="text-light">
                            <Card.Body>
                                <Row>
                                    <Col lg={4} md={6} sm={6} xs={6} className="text-lg-left py-4 text-sm-center">
                                        <h1 className="font-weight-bold">  {teams.strTeam}</h1>
                                        <p> <GoLocation /> Country: {teams.strCountry}</p>
                                        <p> <FaFlag /> IntFormed Year: {teams.intFormedYear}</p>
                                        <p> <BiFootball /> Sport Type: {teams.strSport}</p>
                                        <p> <CgGenderMale /> Gender: {teams.strGender}</p>
                                        <Button variant="light" size="lg"> <Link to={"/"}>  <FaHome /> Go Back </Link> </Button>
                                    </Col>


                                    <Col lg={4} md={6} sm={6} xs={6} className="text-center">
                                        <img className="py-4" src={teams.strTeamBadge} alt="" style={{ width: '15rem' }} />
                                    </Col>

                                    <Col lg={4} md={12} sm={12} xs={12}>
                                        <img className="img-fluid py-3" src={(Object.strGender !== 'female') ? male : female} alt="" />
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>

                        <Row className="py-3">
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <Card className="p-3">
                                    <p > {teams.strDescriptionEN} </p>
                                    <p > {teams.strDescriptionNO} </p>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center ">
                            <Col lg={5} md={12} sm={12} xs={12}>
                                <div className="text-center p-5">
                                    <a target="_blank" rel="noreferrer" href={`https://${teams.strFacebook}`} >  <Button className="px-4 m-3" variant="primary" size="lg">< FaFacebook /></Button> </a>
                                    <a target="_blank" rel="noreferrer" href={`https://${teams.strTwitter}`}> <Button className="px-4 m-3" variant="info" size="lg">< FaTwitter /></Button></a>
                                    <a target="_blank" rel="noreferrer" href={`https://${teams.strYoutube}`}> <Button className="px-4 m-3" variant="success" size="lg">< FaYoutube /></Button></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    
        </>
    );
};

export default Detail;