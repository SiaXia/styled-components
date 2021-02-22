import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar />
    <Footer />
  </Fragment>
);
export default App;
