import './button.css'
import { Link } from 'react-router-dom'


const Button = (user) => {
    
    const { full_name , id } = user

    return(
        <div className='search-results'>
            <Link to ><button>{full_name}</button></Link> 
        </div>
    )
}
export default Button;