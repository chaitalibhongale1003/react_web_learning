import React, { useMemo, useState } from "react";

function UseMemoPOC() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const calculatedValue = useMemo(() => {
    console.log("Heavy calculation running...");

    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total + count;
  }, [count]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.heading}>
          useMemo Hook Demo
        </h2>

        {/* Count Section */}
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
            onClick={() => setCount(0)}
            style={styles.resetBtn}
          >
            Reset
          </button>

        </div>

        <hr style={styles.hr} />

        {/* Input Section */}
        <div style={styles.section}>

          <h3 style={styles.subHeading}>
            Type Something
          </h3>

          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={styles.input}
          />

          <p style={styles.text}>
            Input:
            <span style={styles.highlight}>
              {" "}{text}
            </span>
          </p>

        </div>

        <hr style={styles.hr} />

        {/* Memo Result */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>
            Memoized Result
          </h3>

          <p style={styles.text}>
            <span style={styles.highlight}>
              {calculatedValue}
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

  counterText: {
    color: "#e74c3c",
  },

  input: {
    width: "90%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  text: {
    marginTop: "15px",
    color: "#555",
  },

  highlight: {
    color: "#3498db",
    fontWeight: "bold",
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
  }
};

export default UseMemoPOC;