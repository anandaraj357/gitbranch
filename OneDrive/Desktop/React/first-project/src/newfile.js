import React from "react";
function NewFile() {
  return (
    <div className="NewFile">
      <header className="NewFile-header">
        <h1>Welcome to the New File</h1>
        <p>
          This is a ne
          w file created in the first-project/src directory.
        </p>
        <a
          className="NewFile-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}