import { useEffect, useState, useCallback } from "react";



const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(null);

  console.log("App");

  useCallback;
  
    const fetchData = useCallback(async () => {
        const res = await fetch (
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await res.json();
        setUsers(data);
      },[])


  useEffect (() => {
    console.log("useEffect");
    fetchData();
  },[]);

    if (!users) return <div>Cargando...</div>;
  return <>
  <h1>UseEffect</h1>
  <button onClick={() => setCounter(counter +1)}>Counter : {counter}</button>
  <ul>
    {
     users.map(user => (
      <li key={user.id}>{user.name}</li>
     )) 
    }
  </ul>
  </>;
};

export default App;