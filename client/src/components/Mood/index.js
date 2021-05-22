import React from 'react';

function Mood() {

    return (
        <div className="card mood-card box-shadow-back" style={{width: '18rem'}}>
            <div className="card-header">
                How are you feeling?
            </div>
            <ul className="list-group list-group-flush">
                <button className="btn btn-success">happy</button>
                <button className="btn btn-primary">eh, alright</button>
                <button className="btn btn-warning">not great</button>
                <button className="btn btn-danger">don't wanna talk about it</button>
            </ul>
        </div>
    );
}

export default Mood;