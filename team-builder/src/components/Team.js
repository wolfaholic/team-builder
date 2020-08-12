import React from 'react';
import MemberCard from "./MemberCard"

function Team(props) {

    return(
        <div>
            <h1>Team Members</h1>
            {props.members.map(element => <MemberCard info={element}/>)}
        </div>
    );
}

export default Team;