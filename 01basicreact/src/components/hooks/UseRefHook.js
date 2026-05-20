import React, { useRef, useState } from "react";

function UseRefPOC() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  const [name, setName] = useState("");

  // Tracks renders without re-rendering
  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.heading}>
          useRef Hook Demo
        </h2>

        {/* Input Section */}
        <div style={styles.section}>

          <h3 style={styles.subHeading}>
            Enter Your Name
          </h3>

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <p style={styles.text}>
            Name:
            <span style={styles.highlight}>
              {" "}{name || "Empty"}
            </span>
          </p>

          <button
            onClick={focusInput}
            style={styles.incrementBtn}
          >
            Focus Input
          </button>

        </div>

        <hr style={styles.hr} />

        {/* Render Count Section */}
        <div style={styles.section}>

          <h3 style={styles.counterText}>
            Render Count
          </h3>

          <p style={styles.text}>
            <span style={styles.highlight}>
              {renderCount.current}
            </span>
          </p>

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
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "450px",
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
    color: "#555",
    fontSize: "18px",
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
    marginTop: "10px",
  },

  hr: {
    marginTop: "25px",
    marginBottom: "25px",
  }
};

export default UseRefPOC;