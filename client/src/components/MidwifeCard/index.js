import React from 'react';


const SearchMidwifeCard = (props) => {


        return (
                    <>
                    {props.midwifeCard.map((midwife, index) => (
                        <div>
                        <div key={midwife.id} className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{midwife.firstname}</h5>
                                    <h5 className="card-title">{midwife.lastname}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </>            
        );
}

export default SearchMidwifeCard;