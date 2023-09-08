import "./App.css";
import Header from "./containers/header/Header";
import Starter from "./containers/starter/Starter";
import TitleCenter from "./components/title/TitleCenter";
import TitleLeft from "./components/title/TitleLeft";
import Categorie from "./containers/categorie/Categorie";
import MostCourse from "./containers/most_course/MostCourse";
import Footer from "./containers/footer/Footer";
import About from "./containers/about/About";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Starter />
        <TitleCenter title={"Nos meilleurs catégories"} />
        <Categorie />
        <TitleLeft title={"Les plus populaires"} />
        <MostCourse />
        <TitleLeft title={"A propos de nous"} />
        <About/>
      </div>
      <Footer />
    </>
  );
}

export default App;
