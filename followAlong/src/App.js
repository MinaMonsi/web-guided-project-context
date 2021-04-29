import React, { createContext, useState } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";
import { FamilyContext } from './contexts';
import Button from './components/Button';

// Step 2: Provide the Context (by wrapping Context.Provider around the components that will need to consume the Context)

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);
  
  return (
    <div className="App">
      <FamilyContext.Provider value={{ activeFamily: [activeFamily, setActiveFamily] }}>
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(family => (
          <Button family={family} setActiveFamily={setActiveFamily}/>
        ))}
      </section>
      {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}