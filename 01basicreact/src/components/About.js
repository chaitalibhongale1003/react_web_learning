function About() {
  return (
    <div style={styles.container}>

      <h1>About Us</h1>

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