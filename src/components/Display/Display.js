import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';


const Display = ({movie}) => {
    const imageSource = `../../images/${movie.id}.jpg`;
    let genres = "";
    movie.genres.map(genre => genres = genres.concat(`${genre}, `));
    genres = genres.slice(0, genres.length-2);
    return(
        <Row className="displayRow" id="display">
            <Col sm={4} className="imgCol"><img src={imageSource} className="image"/></Col>
            <Col className="textCol">
                <h1>{movie.title}</h1>
                <h3>Description: </h3>
                <h4>{movie.description}</h4>
                <Row>
                        <Col>
                            <h3>Genre: </h3>
                            <h5>{genres}</h5>
                        </Col>
                        <Col>
                            <h3>Original Release: </h3>
                            <h5>{movie.year}</h5>
                        </Col>
                </Row>
                    <h3>Rating: </h3>
                    <h5>{movie.rating}/10</h5>
            </Col>
        </Row>
    );
}

export default Display;