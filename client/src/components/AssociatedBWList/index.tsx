import { Link } from 'react-router-dom';

const AssociatedBWList = ({
  birthworkerCount,
  username,
  associateWithWorker,
}: any) => {
  console.log('username', username);
  console.log('associateWithWorker', associateWithWorker);
  console.log('birthworkerCount', birthworkerCount);

  if (!associateWithWorker || !associateWithWorker.length) {
    return (
      <div
        className='card mood-card box-shadow-back'
        style={{ width: '18rem' }}
      >
        <div className='card-body'>
          <p>No Associated Birthworkers</p>
        </div>
      </div>
    );
  }

  return (
    <div className='card mood-card box-shadow-back' style={{ width: '18rem' }}>
      <div className='card-header'>
        Your {birthworkerCount}{' '}
        {birthworkerCount === 1
          ? 'associated birthworker'
          : 'associated birthworkers'}
      </div>
      <ul className='list-group list-group-flush'>
        {associateWithWorker.map((birthworker: any) => (
          <li key={birthworker._id}>
            <h6 className='associated-birthworker-name'>
              {birthworker.username}
            </h6>
            <Link
              to={`/profile/birthworker/${birthworker.username}`}
              className='btn btn-primary associated-midwife-btn'
            >
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssociatedBWList;
