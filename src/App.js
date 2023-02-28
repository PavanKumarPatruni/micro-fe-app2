import React from "react";

const MFA1_Button = React.lazy(() => import("mfa1/Button"));

function App() {
  return (
    <div className="App">
      <h1>Micro FE 2</h1>
      <React.Suspense fallback="Loading Button">
        <MFA1_Button />
      </React.Suspense>
    </div>
  );
}

export default App;
