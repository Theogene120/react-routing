import { useState, createContext, useContext, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("theo");
  useEffect(() => {
    setUser('John')
  },[])

  return (
    <UserContext.Provider value={user}>
    <div>
        <p>Do you want to know his name?</p>
        <Display />
    </div>
    </UserContext.Provider>
  )
}

function Display() {
    const user = useContext(UserContext)
    return (
        <p>His name is {user}</p>
    )
}



export default Component1