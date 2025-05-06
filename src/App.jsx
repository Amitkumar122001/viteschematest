import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Company Name",
    url: "https://www.example.com",
    logo: "https://www.example.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890",
      contactType: "customer service",
    },
  };
  return (
    <>
      <script type="application/lg+json">{JSON.stringify(schemaMarkup)}</script>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/*  */}
    </>
  );
}

export default App;
