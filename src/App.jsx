import Categories from "./Component/Categories/Categories";
import HeroSection from "./Component/HeroSection/HeroSection";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="p-2 px-5">
      <NavBar />
      <HeroSection />
      <Categories />
    </div>
  );
}

export default App;
