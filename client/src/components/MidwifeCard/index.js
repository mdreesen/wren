import React from 'react';
import { Link } from "react-router-dom";

const SearchMidwifeCard = (props) => {

    return (
        <>
            {props.midwifeCard.map((midwife, index) => (
                <div key={`each-card-${midwife._id}`} className="card box-shadow-back" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{midwife.firstname}</h5>
                        <h5 className="card-title">{midwife.lastname}</h5>
                        <p className="card-text">Description maybe?</p>
                        <Link to={`/profile/birthworker/${midwife.username}`} className="btn btn-primary">View Profile</Link>
                        {/* <a href="#" className="btn btn-primary">Affiliate</a> */}
                    </div>
                </div>
            ))}
        </>            
    );
}

export default SearchMidwifeCard;