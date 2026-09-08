import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callAPI = async () => {
    const response = await fetch("http://localhost:5000/api/hello");
    const data = await response.json();

    setMessage(data.message);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <button onClick={callAPI}>
        Test Backend API
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;