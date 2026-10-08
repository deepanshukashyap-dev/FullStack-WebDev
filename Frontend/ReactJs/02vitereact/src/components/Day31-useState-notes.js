// Day-31: React useState Hook - Notes
// useState is a React Hook that lets you add state to functional components

// Syntax:
// const [stateVariable, setterFunction] = useState(initialValue);

// Key Rules:
// 1. Only call hooks at the top level (not inside loops, conditions, or nested functions)
// 2. Only call hooks from React function components or custom hooks
// 3. Setter function triggers a re-render when state changes
// 4. State updates are asynchronous - batched for performance
// 5. For objects/arrays, always create new copies when updating

// Common Patterns:
// - Boolean toggle: setIsOpen(!isOpen)
// - Array update: setItems([...items, newItem])
// - Object update: setUser({ ...user, name: "New Name" })
// - Previous state: setCount(prev => prev + 1)  ← preferred for counters

// When to use useState:
// ✅ Toggle UI elements (show/hide, dark/light)
// ✅ Form input values (controlled components)
// ✅ Counter, score tracking
// ✅ Any local component data that changes over time

// When NOT to use useState:
// ❌ Derived data (compute from existing state instead)
// ❌ Refs to DOM elements (use useRef instead)
// ❌ Shared/global state across many components (use Context/Redux)
