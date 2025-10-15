// App.js
import React from "react";

// Child Component
function StudentCard(props) {
  return (
    <div style={{ 
        border: "2px solid #333", 
        padding: "15px", 
        margin: "10px", 
        borderRadius: "10px", 
        width: "250px" 
      }}>
      <h2>Student Details</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Course:</b> {props.course}</p>
      <p><b>Grade:</b> {props.grade}</p>
    </div>
  );
}

// Parent Component
function Application() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🎓 Student Dashboard</h1>
      
      {/* Passing data via props */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <StudentCard name="Anandaraj" course="Computer Science" grade="A+" textAlign="center"/>
      <StudentCard name="Sarveszh" course="CSE" grade="A" />
      <StudentCard name="Smirthi" course="CSE" grade="B+" />
      </div>
    </div>
  );
}

export default Application;