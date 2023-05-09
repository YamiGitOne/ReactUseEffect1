import { useEffect, useState } from "react";

console.log("fuera de App");
const fetchData = async (setUsers) => {
  const res = await fetch (
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await res.json();
  setUsers(data);
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(null);

  console.log("App");

  useEffect (() => {
    console.log("useEffect");
    fetchData(setUsers);
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