import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from 'react-bootstrap';



const RepoItem = ({ repo }) => {
    return (
        <Col md="3">
        <Card className="m-2">
            <Card.Body>
            <p className="mb-0">
                <a href={repo.html_url}>{repo.name}</a>
            </p>
            </Card.Body>
        </Card>
        </Col>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;