import './commit.css'
import { useState } from 'react';
import Messages from '../../components/commithistory/commithistory';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import Button from '../../components/button/button';

const CommitViewer = () =>{
    
const [repo , setRepo]= useState("")
const [users , setUsers]= useState([])

const handleQueryInput = (e) => {
    const value = e.target.value;
    setRepo(value)
}
const handleSearchUsers = async (e) =>{
    e.preventDefault();
    setIsLoading(true)
    if (repo){
        const items = await fetchUsers();
        setUsers(items)
        setIsLoading(false)
    }
    else{
        console.log("Your search brought no results....")
    }

}
const fetchUsers = async () => {
    try {
        const { data } =await axios.get("search/repositories?q="  + repo)
        console.log(data?.items)
        return data?.items
    }
    catch (err){
        console.error(err)
    }
}


    const [isLoading, setIsLoading]= useState()
    return(
        <div className='commit-page'>
                <div className='commit-header'>
                    <h3>CommitViewer</h3>
                    <div className='searchbar-wrapper none-d commit-search-bar commits-search-bar'>
                        <div className='search-bar .commit-searchbar'>
                            <img src={require("../../assets/images/search-icon.png")} alt=""/>
                            <input type='text' onChange={handleQueryInput} placeholder="Eg. facebook/react"/>
                        </div>
                        <button onClick={handleSearchUsers} className='commits-button' href="#">See commits 🚀</button>
                    </div>
                </div>
                <div className='repo-search'>
                    {users? users.map( user =>{
                        return <Button key={user.id} full_name={user.full_name}/>
                    }): <h2>Your search did not bring up any results...</h2> }
                    {isLoading === false &&  users.length < 1 && <h2>Your search did not bring up any results...</h2>}
                    {isLoading && <h2>Loading...</h2>}
                </div>
                <Messages/>
        </div>
    )
}
export default CommitViewer;