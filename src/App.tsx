import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { PageNotFound } from "./pages/pageNotFound";
import { Home } from "./pages/home";

const Details = () => {
  const urlParam = useParams();

  useEffect(() => {
    console.log("urlParam Details", urlParam);
  }, []);

  return <div>Details</div>;
};

const App = () => {
  return (
    <Routes>
      <React.Fragment>
        <Route path="/">
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/search/:searched">
          <Route path="/search/:searched" element={<Home />} />
        </Route>

        <Route path="/details/:itemId">
          <Route path="/details/:itemId" element={<Details />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </React.Fragment>
    </Routes>
  );
};

export default App;
