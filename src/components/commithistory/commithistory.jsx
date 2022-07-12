import './commithistory.css'
import axios from '../../axios';

const Messages = () => {

    return(
        <>  
            <h1></h1>
            <div className='messages'>
                <h5 className='d-yes'>Log all errors to console.error by default (#21130)</h5>
                <div className='messages-info'>
                    <div className='messages-info-1'>
                        <div className='messages-img-container'>
                            <img src={require('../../assets/images/default-img.png')}/>
                            <h6>gaearon</h6>
                        </div>
                        <h5 className='d-no'>Log all errors to console.error by default (#21130)</h5>
                    </div>
                    <div className='messages-date'><p>23:30 28/04/2021</p></div>
                </div>
            </div>
        </>
    )
}
export default Messages;