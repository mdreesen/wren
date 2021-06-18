import decode from 'jwt-decode';
// We are creating a new class called "AuthService"
// insures we use new version and takes out risks of leaving remnant data hanging around

class AuthService {

    // retrive data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    // checks if the user is still logged in
    loggedIn() {
        //checks if there is a saved token and if its still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    // checks to see if the token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false
            }
        } catch (err) {
            return false;
        }
    }

    // retrieve token from local storage
    getToken() {
        //retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    workerLogin(idTokenWorker) {
        if (idTokenWorker) {
            localStorage.setItem('id_token', idTokenWorker);
            window.location.assign('/worker-home');
        } else {
            window.location.assign('/');
        }
//         localStorage.setItem('id_token', idTokenWorker);
// debugger;
//         window.location.assign('/worker-home');
    }

    // set token to local storage and reload to homepage
    userLogin(idToken) {
        // saves user token to local storage
        if (idToken) {
            localStorage.setItem('id_token', idToken);
            window.location.assign('/home');

        } else {
            window.location.assign('/');
        }
        // window.location.assign('/home');
    }

    // clear token from local storage and force logout with reload
    logout() {
        // clear user token and profile data from local storage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    }
}

export default new AuthService();