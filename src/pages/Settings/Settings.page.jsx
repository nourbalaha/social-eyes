import React from 'react';

import './Settings.style.scss';

import UserProfile from '../../components/UserProfile/UserProfile.component';
import SettingsSection from '../../components/SettingsSection/SettingsSection.component';

function Settings() {
    return (
        <div className="settings-page">
            <div className="settings-page-left">
                <UserProfile />
            </div>

            <div className="settings-page-right">
                <SettingsSection />
            </div>
        </div>
    )
}

export default Settings;
