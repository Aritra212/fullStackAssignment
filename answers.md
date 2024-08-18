**1)** How can you implement shared functionality across a component tree?

**ans:** In React, shared functionality across a component tree can be implemented using several approaches :

- **By Lifting State Up:** When multiple components need to share the same state, we can lift the state up to the nearest common ancestor and pass it down as props.

- **Using Context API:** The Context API is used to share data that can be considered global for a tree of React components. It avoids prop drilling by providing a way to pass data into the component tree directly.

- **Using Custom Hooks:** Custom hooks allow us to encapsulate and reuse logic across multiple components. We can use this approach when the same logic is needed in different parts of the component tree.

- **Higher-Order Components (HOC):** HOCs are functions that take a component and return a new component with enhanced behaviour. They are useful for adding shared functionality across multiple components.

- **Render Props:**  This pattern involves passing a function as a prop to a component, where the function controls what should be rendered. It allows the sharing of code between components.

**2)** Why is the useState hook appropriate for handling state in a complex component?

**ans:** useState is a built-in hook that empowers functional components to manage states directly, eliminating the need for class-based components or external state management libraries for simple use cases. It provides an easy mechanism to track dynamic data within a component. The reasons why we should use useState for handling state in a component are discussed below :

- **Simplicity:** Makes state management intuitive and easy to understand.
- **Readability:** Promotes cleaner code, especially for simple state scenarios.
- **Performance:** Lightweight due to being part of the core React library.
- **Integration:** Works seamlessly with other React hooks and features.

useState hook is preferred to manage the state of a component but if the state is shared by multiple components then it is better to use Context API or Redux to manage the state.

    
