import Navbar from "../../components/navbar/Navbar";
import NewsList from "../../components/newslist/NewsList";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <NewsList />
    </div>
  );
}

export default Home;
