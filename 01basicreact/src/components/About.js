import { useLocation } from "react-router-dom";
function About() {
    const location = useLocation();
     console.log(location);
  return (
    <div style={styles.container}>

      <h1>About Us</h1>
      
      <h2>Name: {location.state.name}</h2>

      <h2>City: {location.state.city}</h2>

      <h2>Role: {location.state.role}</h2>
      <p>
        We are learning React navigation and components.
      </p>

      <div style={styles.card}>

        <h2>Our Mission</h2>
        <p>
          Build modern web applications using React.
        </p>

      </div>

      <div style={styles.card}>

        <h2>Our Vision</h2>
        <p>
          Create fast and interactive websites.
        </p>

      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
  },

  card: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
  },
};

export default About;