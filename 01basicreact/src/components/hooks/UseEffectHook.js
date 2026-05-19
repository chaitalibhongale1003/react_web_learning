import React, { useEffect, useState } from "react";

function UseEffectPOC() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Runs once when component loads
  useEffect(() => {
    console.log("Component loaded");
    setMessage("Component Loaded");

    return () => {
      console.log("Component removed");
    };
  }, []);

  // Runs whenever count changes
  useEffect(() => {
    console.log("Count changed:", count);
    setMessage(`Count updated to ${count}`);
  }, [count]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <h2 style={styles.heading}>
          useEffect Hook Demo
        </h2>

        {/* Count Section */}
        <div style={styles.section}>
          
          <h3 style={styles.counterText}>
            Current Count: {count}
          </h3>

          <p style={styles.text}>
            Status:
            <span style={styles.highlight}>
              {" "}{message}
            </span>
          </p>

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

  section: {
    marginTop: "20px",
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
  }
};

export default UseEffectPOC;