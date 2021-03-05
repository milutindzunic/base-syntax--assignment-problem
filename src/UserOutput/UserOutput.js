import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

    return (
        <div className="UserOutput">
            <p>My Username:</p>
            <p>{props.userName}</p>
        </div>
    );
}

export default UserOutput;