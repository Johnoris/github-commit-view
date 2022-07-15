import './home.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import Button from '../../components/button/button';

const Home = () => {
const [repo , setRepo]= useState("")
const [users , setUsers]= useState([])
const [trendingUsers , setTrendingUsers] = useState([])

const handleQueryInput = (e) => {
    const value = e.target.value;
    setRepo(value)
}
const handleSearchUsers = async (e) =>{
    e.preventDefault();
    if (repo){
        const items = await fetchUsers();
        setUsers(items)
    }
    else{
        console.log("Your search brought no results....")
    }
}
const fetchUsers = async () => {
    try {
        const { data } =await axios.get("search/repositories?q="  + repo)
        return data?.items
    }
    catch (err){
        console.error(err)
    }
}
const fetchTrendingUsers = async () => {
    try {
        const { data } =await axios.get("search/repositories?q=language:javaScript+sort:stars&per_page=5")
        return data?.items
    }
    catch (err){
        console.error(err)
    }
}
const handleFetchTrendingUsers = async () =>{
        const items = await fetchTrendingUsers();
        setTrendingUsers(items)
}
useEffect(() => {
    handleFetchTrendingUsers();
}, [])


    return(
        <div className='home-page'>
            <div className='home-top'>
                <h3>CommitViewer</h3>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <h1>Discover the world of code</h1>
            <h4>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</h4>
            <div className='searchbar-wrapper'>
                <div className='search-bar'>
                    <img src={require("../../assets/images/search-icon.png")}/>
                    <input type='text' onChange={handleQueryInput} placeholder="Eg. facebook/react"/>
                </div>
                <Link to='/commits'><button className='commits' href="#" onClick={handleSearchUsers}>See commits 🚀</button></Link>
            </div>
            <div className='repo-search'>
                {users? users.map( user =>{
                    return <Button key={user.id} full_name={user.full_name}/>
                }): <h2>Your search did not bring up any results...</h2> }
            </div>
            <p>Or pick one of these suggested repos</p>
            <div className='suggested-repo'>
                {trendingUsers ? trendingUsers.map ( user =>{
                    return <Button key={user.id} full_name={user.full_name}/>
                }):<h2>Loading.....</h2>}
            </div>
        </div>
    )
}
export default Home;