import React, { useState, useEffect} from 'react';
import './App.css';
import './index.css';

import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [member, setMember] = useState([{
      name: 'Ima Member',
      email: 'imam@teambuilderreact.com',
      role: 'full stack developer',
  }]);
      

  return (
     <div className="App"> 
      <Form setMember={setMember} member={member} />
      <Team members={member} />
     </div>
  );
}

export default App;
