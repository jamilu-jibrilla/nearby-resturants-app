import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <header className="header">
        <h1>Find Nearby Resturants Around You</h1>
        <a href="/Map">
          <button>View Map </button>
        </a>
      </header>
      <div className="bg"></div>
    </div>
  );
};

export default Home;
