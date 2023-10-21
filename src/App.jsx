import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      <h1>React App</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <li>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </li>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
