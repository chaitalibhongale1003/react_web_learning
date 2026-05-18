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
  return (
    <div style={styles.container}>

      <h1>Home Page</h1>
      {/* <p>
        Welcome to our React website.
      </p> */}
      <button onClick={goToAbout}>
      Go to About
      </button>
      <img
        src="https://www.etatvasoft.com/blog/wp-content/uploads/2020/06/reactjs-for-web-development-why-where-to-use.jpg"
        alt="banner"
        style={styles.image}
      />

    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  image: {
    width: "100%",
    marginTop: "10px",
    borderRadius: "10px",
  },
};

export default Home;