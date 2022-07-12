import './commit.css'
import { useState } from 'react';
import Messages from '../../components/commithistory/commithistory';
import { Link } from 'react-router-dom';
import axios from '../../axios';

const CommitViewer = () =>{
    
const [user , setUser]= useState("")
const [users , setUsers]= useState([])

const handleQueryInput = (e) => {
    const value = e.target.value;
    setUser(value)
}

const fetchUsers = async () => {
    try {
        const response =await axios.get("search/repositories?q="  + user)
        console.log(response)
    }
    catch (err){
        console.error(err)
    }
}

const handleSearchUsers = async (e) =>{
    e.preventDefault();
    if (user){
        const items = await fetchUsers();
        setUsers(items)
        setIsLoading(false)
    }
    else{
        console.log("Your search brought no results....")
    }

}
    const [isLoading, setIsLoading]= useState(true)
    return(
        <div className='commit-page'>
                <div className='commit-header'>
                    <h3>CommitViewer</h3>
                    <div className='searchbar-wrapper d-none commit-search-bar'>
                        <div className='search-bar .commit-searchbar'>
                            <img src={require("../../assets/images/search-icon.png")}/>
                            <input type='text' onChange={handleQueryInput} placeholder="Eg. facebook/react"/>
                        </div>
                        <button onClick={handleSearchUsers} className='commits' href="#">See commits 🚀</button>
                    </div>
            </div>
            <div></div>
        </div>
    )
}
export default CommitViewer;