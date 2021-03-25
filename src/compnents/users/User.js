import React, { useEffect, useContext } from 'react';
import Spinner from '../layouts/Spinner';
import Repos from '../layouts/Repos';
import {Link} from 'react-router-dom';
import {Button, Card, Row, Col, Badge} from 'react-bootstrap';
import GithubContext from '../../context/github/githubContext'



 const User = ({ match}) => {
     const githubContext = useContext(GithubContext);
     const {user, getUser, loading, repos, getUserRepos } = githubContext;

   

    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

        const {
            name, 
            avatar_url, 
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;

        
        if (loading) return <Spinner/>
        return (
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-between py-4">
        <Link to="/"><Button className="mr-3" variant="warning">Back to Search</Button>
        </Link>
        <p className="d-inline-block text-light"> Hireable: {' '}
        {hireable ? <span>Yes</span> : <span>No</span>  }</p>
        
        </div>
        
        <Card className="bg-primary">
        <Card.Body >
            
            <Row>
                <Col md='4' className="text-light text-center">
                <Card.Img className="w-50 rounded-circle" src={avatar_url} />
               <h3 className=" pt-3">{name}</h3>
               {bio && (
                <Card.Text className="pb-4"><strong>BIO:</strong> {bio} </Card.Text>)}
                </Col>
                <Col>
                <ul className=" list-group">
               <li className="list-group-item">Location: {location}</li>
               {company && (<li className="list-group-item">Company: {company}</li>)}
               {blog && (<li className="list-group-item">Website: {blog}</li>)}
               {blog && (<li className="list-group-item">Username: {login}</li>)}
                </ul>
               
            <Button className = "mt-4 mb-2" variant="dark" href={html_url}>GitHub Profile
            </Button>
            <hr/>
            <div className="pt-2">
            <Badge className="m-1" variant="secondary">Followers:  {followers}</Badge> 
            <Badge className="m-1" variant="secondary">Following: {following}</Badge>
            <Badge className="m-1" variant="secondary">Public Repos: {public_repos}</Badge> <Badge className="m-1" variant="secondary">Public Gists: {public_gists}</Badge> 
              </div>
            </Col>
          </Row>
        </Card.Body>
        </Card>
        
        <h3 className="text-light pt-3 pl-3">Repos:</h3>
       <Row className="pt-1">
           
           <Repos repos={repos}/>
       </Row>

            </div>
        )
    };




export default User
