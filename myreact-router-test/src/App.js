import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./page/Main";
import About from "./page/About";
import Travels from "./page/Travels";
import TravelForm from "./page/TravelForm";
import NavBarTest from "./components/bootstrap/NavbarTest";

const App = () => {
    return(
      <>
        {/* <p>ㅎㅇ</p> */}
          <Router>
            <NavBarTest />
            <Routes>
              <Route path='' element={<Main />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/travels' element={<Travels />}/>
              <Route path='/travelForm' element={<TravelForm />}/>
            </Routes>
          </Router>
      </>
    );
}

export default App;