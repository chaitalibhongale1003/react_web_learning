import React, { useReducer } from "react";

// Initial state
const initialState = {
  count: 0
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {

    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };

    case "RESET":
      return {
        ...state,
        count: 0
      };

    default:
      return state;
  }
}

function UseReducerPOC() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.heading}>
          useReducer Hook Demo
        </h2>

        <div style={styles.section}>

          <h3 style={styles.counterText}>
            Count: {state.count}
          </h3>

          <button
            onClick={() =>
              dispatch({
                type: "INCREMENT"
              })
            }
            style={styles.incrementBtn}
          >
            Increment
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DECREMENT"
              })
            }
            style={styles.decrementBtn}
          >
            Decrement
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "RESET"
              })
            }
            style={styles.resetBtn}
          >
            Reset
          </button>

        </div>

        <hr style={styles.hr} />

        <div style={styles.section}>
          <p style={styles.text}>
            Last state value:
            <span style={styles.highlight}>
              {" "}
              {state.count}
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

  section: {
    marginTop: "20px",
  },

  counterText: {
    color: "#e74c3c",
    marginBottom: "20px",
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
  }
};

export default UseReducerPOC;