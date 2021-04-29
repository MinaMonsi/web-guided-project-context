import React, { useContext } from "react";
import { FamilyContext } from "../contexts";

import Parents from "./Parents";
import Siblings from "./Siblings";

// Step 3: Consume the context

export default function FamilyTree(props) {
  const family = useContext(FamilyContext);
  return (
    <section className="FamilyTree">
      <h1>{family.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents family={family} />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props */}
      <Siblings family={family} />
    </section>
  );
}
