import { Link } from 'react-router-dom';

const SearchUserCard = (props: any) => {
  return (
    <>
      {props.userCard.map((user: any, index: number) => (
        <div
          key={`each-card-${user._id}`}
          className='card box-shadow-back'
          style={{ width: '18rem' }}
        >
          <div className='card-body'>
            <h5 className='card-title'>{user.firstname}</h5>
            <h5 className='card-title'>{user.lastname}</h5>
            <p className='card-text'>Description maybe?</p>
            <Link
              to={`/profile/user/${user.username}`}
              className='btn btn-primary'
            >
              View Profile
            </Link>
            {/* <a href="#" className="btn btn-primary">Affiliate</a> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchUserCard;
