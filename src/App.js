import React from "react";
import './Css/Header.css'
import Section from "./Section";
import Header from "./Header";
import Table from "./Table";
import Aside from "./Aside";


function App() {
  return (
    <div className="cover">
<Header/>
  <Section/>
  <Table/>
<Aside/>
    </div>
  );
}

export default App;
