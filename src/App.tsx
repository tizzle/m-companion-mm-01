import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import SearchResults from "./routes/search-results";

const stopReloadTouch = true;

const App = () => {
  React.useEffect(() => {
    // console.log("startup effect");
    window.addEventListener(
      "touchmove",
      (ev) => {
        // console.log("touch move");
        if (stopReloadTouch) {
          // console.log("stopped propagation");
          ev.preventDefault();
          ev.stopImmediatePropagation();
        }
      },
      { passive: false }
    );
  }, []);

  return (
    <div className="flex flex-col h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/results" Component={SearchResults} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
