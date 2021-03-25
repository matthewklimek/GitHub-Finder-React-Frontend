import React from 'react';
import  Card from 'react-bootstrap/Card';
import  Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


 const UserItem = ({user: {login, avatar_url, html_url}, fucky}) =>  {

       

   
        
        
        return (
    <Card className="bg-light" >
  <Card.Img variant="top" src={avatar_url} />
  <Card.Body>
    <Card.Title>{login}</Card.Title>
    <Card.Text>
     This person rocks!
    </Card.Text>
    <Link to={`/user/${login}`}><Button variant="primary">Profile</Button></Link>
  </Card.Body>
</Card>
        )
    }

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
