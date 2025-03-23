import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="settings-container">
            <h1 className="text-2xl font-bold">Settings</h1>
            <div className="theme-selection">
                <h2 className="text-xl">Theme</h2>
                <select className="border rounded p-2">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div className="notification-preferences">
                <h2 className="text-xl">Notifications</h2>
                <label>
                    <input type="checkbox" />
                    Enable notifications
                </label>
            </div>
        </div>
    );
};

export default Settings;