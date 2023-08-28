import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../public/Footer";
import { Navbar } from "../public/Navbar";
import { Main } from "../public/Main";
import Land from "./../public/Land";
import { Details } from "../public/Details";
import Form from "../public/Form";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Land />} />
        <Route path={"/main"} element={<Main />} />
        <Route path={"/details/:id"} element={<Details />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
