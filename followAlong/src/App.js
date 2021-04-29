import React, { createContext, useState } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  // Step 1: create a Context
  export const FamilyContext = createContext(); // initialize later, when providing the context to a component tree

  // Contexts must be capitalized becuase they're used as components, and JSX interprets uppercase as components

  // Step 2: Provide the Context (by wrapping Context.Provider around the components that will need to consume the Context)

  console.log(FamilyContext);
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
              {d.familyName}
            </button>
          ))}
        </section>
        {activeFamily && <FamilyTree family={activeFamily} />}
      </FamilyContext.Provider>
    </div>
  );
}