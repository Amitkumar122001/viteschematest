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
      <Helmet>
        <script type="application/lg+json">
          {`{
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "About Us",
              "url": "https://www.aaveg.com/about-us",
              "description": "Learn more about our company, our mission, and our team.",
              "publisher": {
                "@type": "Organization",
                "name": "Aaveg Shuttle",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.aaveg.com/assets/aaveg_logo-DSY_o52I.svg"
                },
                "url": "https://www.aaveg.com"
              },
              "mainEntity": {
                "@type": "Organization",
                "name": "Aaveg Shuttle",
                "url": "https://www.aaveg.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.aaveg.com/assets/aaveg_logo-DSY_o52I.svg"
                  },
                "foundingDate": "2015-10-08",
                "foundingLocation": "Gurugram, India",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8877437743",
                  "contactType": "Customer Service"
                },
                "sameAs": [
                  "https://www.facebook.com/aavegshuttle",
                  "https://www.instagram.com/aaveg.shuttle",
                  "https://www.linkedin.com/company/7789872/",
                  "https://x.com/aavegin",
                  "https://www.youtube.com/channel/UCXbXk7-Cd2AVAY1Vs58h5Sg"
                ]
              }
}
              
              `}
        </script>
      </Helmet>
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
