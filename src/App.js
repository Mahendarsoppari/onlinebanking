import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import CreditScoreLogin from "./components/Credits/creditstorelogin";
import HeroSection from "./components/Herosection/heropage";
import Credit from "./components/Credits/credit";
import Creditcardhero from "./components/Creditcardsection/creditcardhero";
import ContactUs from "./components/Contactus/contactpage";
import HomeloanHero from "./components/Homeloan/homeloan";
import Loanagainestproparty from "./components/moredropdownpages/loanagainestproparty";
import Mentorinsurence from "./components/moredropdownpages/mentorinsurence";
import Emicaliculator from "./components/Emicaliculatorpages/emicaliculator";
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed on all pages */}
      <Routes>
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/credit" element={<CreditScoreLogin />} />
        <Route path="/creditscore" element={<Credit />} />
        <Route path="/creditcardhero" element={<Creditcardhero />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/homeloanhero" element={<HomeloanHero />} />
        <Route path="/loanagainest" element={<Loanagainestproparty />} />
        <Route path="/mentorinsurence" element={<Mentorinsurence />} />
        {/* <Route path="/emicaliculatorpage1" element={<Emicaliculator />} /> */}
        <Route path="/emicaliculatorpage" element={<Emicaliculator />} />


      </Routes>
    </Router>
  );
}

export default App;
