import './button.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CommitLinkContext } from '../../App'
import Messages from '../commithistory/commithistory'

const Button = (user) => {  
    const [commitLink , setCommitLink] = useContext(CommitLinkContext)
    const { full_name , id } = user
    setCommitLink(full_name)
    const navigate= useNavigate();
    const handleRoute = () => {
        navigate('/commits')
    }  
    <Messages fullame={commitLink}/>
    return(
            <div className='search-results' key={id}>
                <button onClick={handleRoute}>{full_name}</button>
            </div>
    )
}
export default Button;