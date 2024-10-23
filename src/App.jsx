import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import FooterCom from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
// pages import section:
import About from "./Pages/About";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import WeddingVenues from "./Pages/WeddingVenues";
import WeddingFarmHouse from "./Pages/WeddingFarmHouse";
import BanquetHalls from "./Pages/BanquetHalls";
import MarriageGarden from "./Pages/MarriageGarden";
import WeddingResorts from "./Pages/WeddingResorts";
import KalyanaMandapams from "./Pages/KalyanaMandapams";
import Restaurant from "./Pages/Restaurant";
import Budget from "./Pages/Budget";
import WeddingVendors from "./Pages/WeddingVendors";
import PlanningTool from "./Pages/PlanningTool";
import WeddingPhotography from "./Pages/WeddingPhotography";
import WeddingVideography from "./Pages/WeddingVideography";
import WeddingInvitation from "./Pages/WeddingInvitation";
import Caterers from "./Pages/Caterers";
import Florits from "./Pages/Florits";
import Bride from "./Pages/Bride";
import MehndiArtits from "./Pages/Mehndi Artits";
import BridalMakeup from "./Pages/BridalMakeup";
import MakeupSalon from "./Pages/MakeupSalon";
import BridalJewellary from "./Pages/BridalJewellary";
import BridalLehenga from "./Pages/BridalLehenga";
import Groms from "./Pages/Groms";
import Sherwani from "./Pages/Sherwani";
import Entertainment from "./Pages/Entertainment";
import Honeymoon from "./Pages/Honeymoon";
import WeddingChoreographers from "./Pages/WeddingChoreographers";
import WeddingCake from "./Pages/WeddingCake";
import Decoration from "./Pages/Decoration";
import Offerone from "./Pages/Offerone";
import Offertwo from "./Pages/Offertwo";
import Offerthree from "./Pages/Offerthree";
import PageNotFound from "./Pages/PageNotFound";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* //WeddingVenues pages */}
        <Route path={"/weddingvenues"} element={<WeddingVenues />} />
        <Route path={"/weddingfarmhouse"} element={<WeddingFarmHouse />} />
        <Route path={"/restaurant"} element={<Restaurant />} />
        <Route path={"/banquethalls"} element={<BanquetHalls />} />
        <Route path={"/marriagegarden"} element={<MarriageGarden />} />
        <Route path={"/weddingresort"} element={<WeddingResorts />} />
        <Route path={"/kalyanam"} element={<KalyanaMandapams />} />
        {/* Plannig Tools*/}
        <Route path="/planningtool" element={<PlanningTool />} />
        <Route path="/cake" element={<WeddingCake/>} />
        {/*Budget */}
        <Route path="/budget" element={<Budget />} />
        <Route path="/offerone" element={<Offerone/>}/>
        <Route path="/offertwo" element={<Offertwo/>}/>
        <Route path="/offerthree" element={<Offerthree/>}/>
        <Route path="/weddingVendors" element={<WeddingVendors />} />
        <Route path="/honeymoon" element={<Honeymoon />} />
        <Route path="/decoration" element={<Decoration/>}/>
        <Route path="/weddingchoreographers" element={<WeddingChoreographers/>} />
        {/* Wedding Vendors*/}
        <Route path="/photography" element={<WeddingPhotography />} />
        <Route path="/videography" element={<WeddingVideography />} />
        <Route path="/entertainment" element={<Entertainment/>} />
        <Route path="/invitation" element={<WeddingInvitation />} />
        <Route path="/caterers" element={<Caterers />} />
        <Route path="/florits" element={<Florits />} />
      {/*Brides*/}
      <Route path="/bride" element={<Bride/>} />
      <Route path="/mehndiArtits" element={<MehndiArtits/>} />
      <Route path="/bridalMakeup" element={<BridalMakeup/>} />
      <Route path="/makesalon" element={<MakeupSalon/>} />
      <Route path="/bridaljewellary" element={<BridalJewellary/>} />
      <Route path="/bridalLehenga" element={<BridalLehenga/>}/>
      {/*Groms*/}
      <Route path='/groms' element={<Groms/>}/>
      <Route path="/sherwani" element={<Sherwani/>}/>
      </Routes>
    
      <FooterCom />
    </BrowserRouter>
    </div>
  );
};

export default App;
