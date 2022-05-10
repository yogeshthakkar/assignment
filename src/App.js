import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import RecentPost from "./RecentPost";
import FeaturedWorks from "./FeaturedWorks";

function App() {
  return (
    <div>
      <Header />
      <PersonalInfo />
      {/* don't have any recent post so use static data as given in figma */}
      <RecentPost />
      <FeaturedWorks />
      <Footer />
    </div>
  );
}

export default App;
