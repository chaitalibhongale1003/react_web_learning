import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const goToAbout = () => {

    navigate("/about", {
      state: {
        name: "Chaitali",
        city: "Atpadi",
        role: "Flutter Developer"
      }
    });

  };

  const goToUseStateHook = () => {
  navigate("/useStateHook");
  };

  const goToUseEffectHook = () => {
  navigate("/useEffectHook");
  };

  const goToUseContextHook = () => {
  navigate("/useContextHook");
  };

  return (
    <div style={styles.container}>

      <h1>Home Page</h1>
      {/* <p>
        Welcome to our React website.
      </p> */}
      
      <img
        src="https://www.etatvasoft.com/blog/wp-content/uploads/2020/06/reactjs-for-web-development-why-where-to-use.jpg"
        alt="banner"
        style={styles.image}
      />
      <br/>
      <button style={styles.button} onClick={goToAbout}>
      Go to About
      </button>

      <button style={styles.button} onClick={goToUseStateHook}>
       UseState Hook
      </button>

      <button style={styles.button} onClick={goToUseEffectHook}>
       UseEffect Hook
      </button>

      <button style={styles.button} onClick={goToUseContextHook}>
       UseContext Hook
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  image: {
    width: "20%",
    marginTop: "10px",
    borderRadius: "10px",
  },
  button: {
     marginTop: "10px",
     marginRight: "10px"
  }
};

export default Home;