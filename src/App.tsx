import MeusImoveisSection from "./components/MeusImoveisSection";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ProfileSection from "./components/ProfileSection";
import Service from "./components/Service";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <ProfileSection />
      <MeusImoveisSection />
      <Service />
      <Newsletter />
    </div>
  );
}

export default App;
