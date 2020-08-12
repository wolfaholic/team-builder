import React, { useState } from 'react';

function Form(props) {
    
    const[memberInfo, setMemberInfo] = useState ({
        name: '',
        email: '',
        role: ''
    });

    const onInputChange = event => {
        setMemberInfo({
            ...memberInfo,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = event => {
        event.preventDefault();
        props.setMember([
            ...props.member,
            {
                name: memberInfo.name,
                email: memberInfo.email,
                role: memberInfo.role
            }
        ]);
    }

    return (
      
        <form className="member-form" onSubmit={onSubmitData}>
            <label> Name: 
                <input name='name' onChange={onInputChange} />
            </label>
            <label> Email:
                <input name='email' onChange={onInputChange} />
            </label>
            <label>Role:
                <input name='role' onChange={onInputChange} />
            </label>
            <button>Add New Member</button>
        </form>
    )
}


export default Form; 