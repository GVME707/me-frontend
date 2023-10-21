import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(import.meta.env.VITE_API);
    fetch(import.meta.env.VITE_API + "/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((json) => setUsers(json))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
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
