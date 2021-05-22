import React from 'react';

function Mood() {

    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
                How are you feeling?
            </div>
            <ul className="list-group list-group-flush">
                <button className="btn btn-primary">happy</button>
                <button className="btn btn-primary">eh, alright</button>
                <button className="btn btn-primary">not great</button>
                <button className="btn btn-primary">don't wanna talk about it</button>
            </ul>
        </div>
    );
}

export default Mood;