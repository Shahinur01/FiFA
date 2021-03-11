import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Team from '../Team/Team';

const AllTeam = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(Response => Response.json())
            .then(data => {
                setTeams
                    (data && data.teams)
                document.getElementById('spinner').style.display = 'none';
            })
    }, [])

    return (
        <>
            <div id="spinner" className="loaders">
                <div className="indicator"></div>
            </div>
            { <Row> {teams.map(team => <Team team={team} key={team.idTeam} />)} </Row>}
        </>
    );
};

export default AllTeam;