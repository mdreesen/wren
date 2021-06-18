import React from 'react';
import { Link } from 'react-router-dom';

    const AssociatedUserList = ({ userCount, username, associateWithUser }) => {

        console.log('username', username)
        console.log('associateWithWorker', associateWithUser)
        console.log('birthworkerCount', userCount)

        if (!associateWithUser || !associateWithUser.length) {
          return (
            <div className="card mood-card box-shadow-back" style={{width: '18rem'}}>
            <div className="card-body">
                <p>No Associated Users</p>
            </div>
        </div> 
          )
        }

    return (
        <div className="card mood-card box-shadow-back" style={{width: '18rem'}}>
            <div className="card-header">
                Your {userCount} {userCount === 1 ? 'associated user' : 'associated users'}
            </div>
            <ul className="list-group list-group-flush">
            {associateWithUser.map(user => (
                    <li key={user._id}>
                        <h6 className="associated-birthworker-name">{user.username}</h6>
                        <Link to={`/profile/birthworker/${user.username}`} className="btn btn-primary associated-midwife-btn">View Profile</Link>
                    </li>
                ))}
            </ul>
        </div> 
    );
}

export default AssociatedUserList;
