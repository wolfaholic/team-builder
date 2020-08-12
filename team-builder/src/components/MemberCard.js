import React from 'react';

function MemberCard(props) {
    return (
        <div className="member-card">
            <h2>
                {props.info.name}
            </h2>
            <p>
                {props.info.email}
            </p>
            <p>
                {props.info.role}
            </p>
        </div>
    );
}

export default MemberCard;