import React, { useState } from 'react';

const Home = props => {
    const [user, setUser] = useState('');
    const [login, setLogin] = useState('');
    return (
      <div>
        {user ? <h1>{user}'s App</h1> : (
          <>
            <input type='text' onChange={e => setLogin(e.target.value)} />
            <button onClick={() => setUser(login)}>Login</button>
          </>
        )}
      </div>
    );
  }
  
  export default Home;