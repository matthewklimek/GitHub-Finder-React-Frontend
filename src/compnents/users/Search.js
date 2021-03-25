import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'



const Search = () => {
  

  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
    const [text, setText] = useState('');

    const onChange = e => 
         setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === "") {
            alertContext.setAlert('Please enter something', 'danger'); 
        } else {
        githubContext.searchUsers(text);
        setText('')
        }
    }
        return (
            <div className="pt-5 text-center">
                <h1 className="text-light display-1">Github Finder</h1>
                
<Form onSubmit={onSubmit} >
  <Form.Group controlId="searchBar">
    <Form.Control type="text" name="text" placeholder="Search Users" value={text} onChange={onChange}/>
  </Form.Group>
  <Button variant="primary" type="submit" block>
    Submit
  </Button>
</Form>
{githubContext.users.length > 0 && <Button className="mt-3" variant="secondary" block onClick={githubContext.clearUsers}>
    Clear
  </Button>}

            </div>
        )                       
    }


export default Search
