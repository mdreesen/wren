// import components
import NavbarUser from '../../components/NavbarUser';
import Auth from '../../utils/auth';

function Documents() {
  return (
    <div>
      <NavbarUser />
      {Auth.loggedIn() ? (
        <>
          <div>This is the Documents page</div>
        </>
      ) : (
        <>
          <h5>Please log in to to be a part of our community!</h5>
        </>
      )}
    </div>
  );
}

export default Documents;
