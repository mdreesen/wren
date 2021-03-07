import React from 'react';

function UserInfo() {
    return(
        <div>
        <p>Update your profile here</p>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
            </div>
      </div>
    );
}

export default UserInfo;