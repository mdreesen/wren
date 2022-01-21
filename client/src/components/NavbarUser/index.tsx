import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event: any) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse navbar-css' id='navbarNav'>
        {Auth.loggedIn() ? (
          <>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/home' className='nav-link'>
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                    <Link to="/user-documents" className="nav-link">
                        Documents
                    </Link>
                </li> */}
              <li className='nav-item'>
                <Link to='/settings' className='nav-link'>
                  Settings
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                back
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
