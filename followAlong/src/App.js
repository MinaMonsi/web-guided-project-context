import React, { createContext, useState } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";
import { FamilyContext } from "./contexts";

// Step 2: Provide the Context (by wrapping Context.Provider around the components that will need to consume the Context)

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <FamilyContext.Provider value={activeFamily}>
        <section className="header">
          <h1>Family Trees</h1>
          {families.map(family => (
            <button
              className={`family-button ${family.familyName ===
                activeFamily.familyName && "active"}`}
              key={family.familyName}
              onClick={() => setActiveFamily(family)}
            >
              {family.familyName}
            </button>
          ))}
        </section>
        {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}