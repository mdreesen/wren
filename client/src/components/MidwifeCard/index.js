import React from 'react';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { ASSOCIATE_WITH_WORKER } from '../../utils/mutations';


const SearchMidwifeCard = (props) => {

    const [associateWithWorker, { error }] = useMutation(ASSOCIATE_WITH_WORKER);


    const eachWorker = async event => {
        event.preventDefault();
    
        try {
            const { data } = await associateWithWorker({
                variables: { data }
            });
            console.log(data);
        } catch(e) {
            console.log(e)
        }
    };

    return (
        <>
            {props.midwifeCard.map((midwife, index) => (
                <div key={midwife.awwId} className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{midwife.firstname}</h5>
                        <h5 className="card-title">{midwife.lastname}</h5>
                        <p className="card-text">Description maybe?</p>
                        <button onClick={eachWorker} className="btn btn-primary">Affiliate</button>
                        {/* <a href="#" className="btn btn-primary">Affiliate</a> */}
                    </div>
                </div>
            ))}
        </>            
    );
}

export default SearchMidwifeCard;