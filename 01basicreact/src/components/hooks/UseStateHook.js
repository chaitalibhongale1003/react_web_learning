import React, { useState } from "react";

function UseStatePOC() {

  // State variables
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h2 style={styles.heading}>
          useState Hook Demo
        </h2>

        {/* Input Section */}
        <div style={styles.section}>

          <h3 style={styles.subHeading}>
            Enter Your Name
          </h3>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <p style={styles.text}>
            Welcome: <span style={styles.highlight}>{name}</span>
          </p>

        </div>

        <hr style={styles.hr} />

        {/* Counter Section */}
        <div style={styles.section}>

          <h3 style={styles.counterText}>
            Count: {count}
          </h3>

          <button
            onClick={() => setCount(count + 1)}
            style={styles.incrementBtn}
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            style={styles.decrementBtn}
          >
            Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            style={styles.resetBtn}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
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

  counterText: {
    color: "#e74c3c",
    marginBottom: "20px",
  },

  incrementBtn: {
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },

  decrementBtn: {
    backgroundColor: "#e67e22",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },

  resetBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  hr: {
    marginTop: "25px",
    marginBottom: "25px",
  },
};

export default UseStatePOC;