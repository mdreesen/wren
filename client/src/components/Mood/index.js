import React from 'react';
import { Link } from 'react-router-dom';

function Mood() {

    return (
        <div className="card mood-card box-shadow-back" style={{width: '18rem'}}>
            <div className="card-header">
                Let us know how you are feeling
            </div>
                {/* <button><Link to={`/mood/${mood.username}`}>Mood</Link></button> */}
        </div>
    );
}

export default Mood;