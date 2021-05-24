import React from 'react';
import { Link } from 'react-router-dom';

    const AssociatedBWList = ({ birthworkerCount, username, associateWithWorker }) => {

        console.log('username' ,username)
        console.log('associateWithWorker' ,associateWithWorker)
        console.log('birthworkerCount' ,birthworkerCount)

        if (!associateWithWorker || !associateWithWorker.length) {
          return (
            <div className="card mood-card box-shadow-back" style={{width: '18rem'}}>
            <div className="card-body">
                <p>No Associated Birthworkers</p>
            </div>
        </div> 
          )
        }

    return (
        <div className="card mood-card box-shadow-back" style={{width: '18rem'}}>
            <div className="card-header">
                Your {birthworkerCount} {birthworkerCount === 1 ? 'associated birthworker' : 'associated birthworkers'}
            </div>
            <ul className="list-group list-group-flush">
            {associateWithWorker.map(birthworker => (
                    <li className="btn btn-primary" key={birthworker._id}>
                    <Link to={`/profile/${birthworker.username}`}>{birthworker.username}</Link>
                    </li>
                ))}
            </ul>
        </div> 
    );
}

export default AssociatedBWList;
