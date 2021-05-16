import React from 'react';
import { Link, useParams } from "react-router-dom";


const SearchMidwifeCard = (props) => {

    return (
        <>
            {props.midwifeCard.map((midwife, index) => (
                <div key={midwife.id} className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{midwife.firstname}</h5>
                        <h5 className="card-title">{midwife.lastname}</h5>
                        <p className="card-text">Description maybe?</p>
                        <Link to='' className="btn btn-primary"></Link>
                        {/* <a href="#" className="btn btn-primary">Affiliate</a> */}
                    </div>
                </div>
            ))}
        </>            
    );
}

export default SearchMidwifeCard;