import "./App.css";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import MyNavbar from "./Navbar";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Banner className="bb" />
      <div className="style">
        <Card className="nnn1" />
        <Card className="nnn2" />
        <Card className="nnn3" />
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default App;
