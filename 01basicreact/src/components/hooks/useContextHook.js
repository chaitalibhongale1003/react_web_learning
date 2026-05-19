import React, { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

function ChildComponent() {
  // Access context data
  const { userName } = useContext(UserContext);

  return (
    <div style={styles.childCard}>
      <h3 style={styles.subHeading}>
        Child Component
      </h3>

      <p style={styles.text}>
        Welcome:
        <span style={styles.highlight}>
          {" "}{userName || "No Name Entered"}
        </span>
      </p>
    </div>
  );
}

function UseContextPOC() {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName }}>
      <div style={styles.container}>
        <div style={styles.card}>

          <h2 style={styles.heading}>
            useContext Hook Demo
          </h2>

          <div style={styles.section}>

            <h3 style={styles.subHeading}>
              Enter Your Name
            </h3>

            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={styles.input}
            />

            <p style={styles.text}>
              Parent Value:
              <span style={styles.highlight}>
                {" "}{userName || "Empty"}
              </span>
            </p>

          </div>

          <hr style={styles.hr} />

          {/* Child reads data without props */}
          <ChildComponent />

        </div>
      </div>
    </UserContext.Provider>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    width: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  childCard: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  },

  heading: {
    color: "#2c3e50",
    marginBottom: "20px",
  },

  subHeading: {
    color: "#34495e",
  },

  section: {
    marginTop: "20px",
  },

  input: {
    width: "90%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },

  text: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#555",
  },

  highlight: {
    color: "#3498db",
    fontWeight: "bold",
  },

  hr: {
    marginTop: "25px",
    marginBottom: "25px",
  }
};

export default UseContextPOC;