import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <ProfileSection />
      <SearchSection />
    </div>
  );
}

export default App;
