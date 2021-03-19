import React, { useState } from 'react';


const SearchMidwifeCard = (props) => {

    // using useState to set the midwife card
    // if there is nothing, return an empty array -> useState([]);
    const [midwifeCard, setMidwifeCard] = useState([]);


    // midwifeSearch function to get all midwife data from the database
     const midwifeSearch = async () => {
        const response = await fetch('/api/midwife');
        const responseJson = await response.json();
        setMidwifeCard(responseJson.results)
        console.log(responseJson);
    }

    return(
        <div>
        <>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">what</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
            <button onClick={midwifeSearch}>See all Midwives</button>
        </div>

    );
}

export default SearchMidwifeCard;