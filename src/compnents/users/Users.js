import React, {useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext'


const Users = () => {
const githubContext = useContext(GithubContext);

const { loading, users } = githubContext;
    if (loading){
        return <Spinner/>
    }
    else {
        return (

            <div className = "row">
                
                {users.map(user => (
                <div key={user.id} className = "col-12 col-md-6 col-lg-4 p-3">
                <UserItem user={user}/>
                </div>
                ))}
            </div>
        )
    }
}



export default Users
