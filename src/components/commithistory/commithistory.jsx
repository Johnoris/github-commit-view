import './commithistory.css'
import Api from '../../axios';
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { CommitLinkContext } from '../../App'

const Messages = (props) => {
    const [commitLink ,setCommitLink] = useContext(CommitLinkContext)
    useEffect(() => {
        handleFetchCommits();
    }, [])
    const [fetchedCommits, setFetchedCommits] = useState([])
    const fetchCommits= async() => {
        try {
            const { data } = await Api.get("repos/" + commitLink +"/commits")
            return data
        }
        catch (error) {
            console.log (error)
        }
    }
    const handleFetchCommits = async (e) =>{
        const commits = await fetchCommits();
        setFetchedCommits(commits)
    }
    return (
        <div className="commit-history">
            {fetchedCommits? fetchedCommits.map( commits =>{
                return <CommitMessages key={commits?.author?.id} commitmessage={commits?.commit?.message} name={commits?.commit?.committer?.name} avatarimg={commits?.author?.avatar_url} date={commits?.commit?.committer?.date}/>
            }): <h2>Your search did not bring up any results...</h2> }
        </div>
    )
}
const CommitMessages= (props) => {
    return(
        <>  
            <div className='messages'>
                <h5 className='d-yes'>{props.commitmessage}</h5>
                <div className='messages-info'>
                    <div className='messages-info-1'>
                        <div className='messages-img-container'>
                            <img src={props.avatarimg} alt=""/>
                            <h6>{props.name}</h6>
                        </div>
                        <h5 className='d-no'>{props.commitmessage}</h5>
                    </div>
                    <div className='messages-date'><p>{props.date}</p></div>
                </div>
            </div>
        </>
    )
}
export default Messages;