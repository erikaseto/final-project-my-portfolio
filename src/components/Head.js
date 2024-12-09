import {Link} from 'react-router-dom';

export default function Head(){
    
    return (
    <h3 id='route-button'>
        <ul>
                <Link to="/">Photos</Link> | 
                <Link to="/experience">Resume</Link>
        </ul>
    </h3>    
    )
}
