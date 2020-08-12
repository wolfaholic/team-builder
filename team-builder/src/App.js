import React, { useState} from 'react';
import './App.css';

import Forum from './components/Form';
import Team from './components/Team';

function App() {

  const [member, setMember] = useState([{
      name: 'Ima Member';
      email: 'imam@teambuilderreact.com';
      role: 'full stack developer';
  }]);
      

  return (
     <div className="App"> 
      <Form setMember={setMember} member={member} />

     </div>
  );
}

export default App;
