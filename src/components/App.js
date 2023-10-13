import '../styles/App.scss';
import {Form} from './Form';
import {Home} from './Home';
import { useState} from 'react';

function App() {
  
  const [user, setUser] = useState ([])


  return (
    <div className="App">
     <Form setUser={setUser}/>
     <Home />
    </div>
  );
}

export default App;
