import MeusImoveisSection from "./components/MeusImoveisSection";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <ProfileSection />
      <MeusImoveisSection />
    </div>
  );
}

export default App;
