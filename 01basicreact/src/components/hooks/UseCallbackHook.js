import React, {
  useState,
  useCallback,
  memo
} from "react";

// Child component
const ChildComponent = memo(({ onClick }) => {
  console.log("Child Component Rendered");

  return (
    <div style={styles.childCard}>
      <h3 style={styles.subHeading}>
        Child Component
      </h3>

      <button
        onClick={onClick}
        style={styles.incrementBtn}
      >
        Click Child Button
      </button>
    </div>
  );
});

function UseCallbackPOC() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback memoizes function
  const handleChildClick = useCallback(() => {
    alert("Child button clicked");
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.heading}>
          useCallback Hook Demo
        </h2>

        {/* Counter */}
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
        </div>

        <hr style={styles.hr} />

        {/* Input */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>
            Type Something
          </h3>

          <input
            type="text"
            value={text}
            placeholder="Enter text"
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

        {/* Child Component */}
        <ChildComponent onClick={handleChildClick} />

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

  childCard: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  },

  heading: {
    color: "#2c3e50",
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
  },

  hr: {
    marginTop: "25px",
    marginBottom: "25px",
  }
};

export default UseCallbackPOC;