import React from 'react';

import './Settings.style.scss';

import UserProfile from '../../components/UserProfile/UserProfile.component';

function Settings() {
    return (
        <div className="settings-page">
            <div className="settings-page-left">
                <UserProfile />
            </div>

            <div className="settings-page-right">
                Right Section
            </div>
        </div>
    )
}

export default Settings;
