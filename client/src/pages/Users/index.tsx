import { useQuery } from '@apollo/react-hooks';
import { QUERY_ASSOCIATED_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

import UserCard from '../../components/UserCard';
import NavbarWorker from '../../components/NavbarWorker';

function AllUsers() {
  // getting the data from the query
  const { loading, data } = useQuery(QUERY_ASSOCIATED_USER);
  console.log({ data });

  // if no users then bring back an empty array
  const users = data?.users || [];

  if (loading) {
    return <div>Loading users</div>;
  }

  if (!users) {
    return <div>No Users Yet</div>;
  }

  return (
    <div>
      <NavbarWorker />
      {Auth.loggedIn() ? (
        <div>
          <div className='row-container'>
            <div className='row'>
              <UserCard userCard={users} />
            </div>
          </div>
        </div>
      ) : (
        <h5>Please log in to to be a part of our community!</h5>
      )}
    </div>
  );
}

export default AllUsers;
