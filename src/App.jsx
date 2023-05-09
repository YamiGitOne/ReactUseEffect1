import { useState } from "react";
import { useFetch } from './hooks/useFetch'

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("App");
const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{ error }</div>;
  return <>
  <h1>UseEffect</h1>
  <button onClick={() => setCounter(counter +1)}>Counter : {counter}</button>
  <ul>
    {
     data.map(data => (
      <li key={data.id}>{data.name}</li>
     )) 
    }
  </ul>
  </>;
};

export default App;