import React from "react";
import { Page_1 } from "./pages/page_1.jsx";
import { Page_2 } from "./pages/page_2.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Page_3 } from "./pages/page_3.jsx";
function App(){
   const location = useLocation();
   console.log('location', location)
 return(
  <div className="App">
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<Page_1 />} />
          <Route path="/page_2" element={<Page_2 />} />
          <Route path="/page_3" element={<Page_3 />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  </div>
   )
}

export default App;
