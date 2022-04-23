import "./Home.css";
const Home = () => {
  alert("please turn on your location")
  return (
    <div className="Home">
      <header className="header">
        <h1>Fi..nd Nearby Resturants Around You</h1>
        <a href="/Map">
          <button>View Map </button>
        </a>
      </header>
      <div className="bg"></div>
    </div>
  );
};

export default Home;
