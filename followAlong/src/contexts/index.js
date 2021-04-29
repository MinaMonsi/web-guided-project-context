// Step 1: create a Context
export const FamilyContext = createContext(); // initialize later, when providing the context to a component tree

// Contexts must be capitalized becuase they're used as components, and JSX interprets uppercase as components

// Step 2: Provide the Context (by wrapping Context.Provider around the components that will need to consume the Context)