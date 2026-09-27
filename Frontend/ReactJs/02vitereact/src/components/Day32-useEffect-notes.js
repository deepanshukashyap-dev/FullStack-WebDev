// Day-32: React useEffect Hook - Notes
// useEffect lets you perform side effects in functional components

// Syntax:
// useEffect(() => {
//   // side effect code
//   return () => { /* cleanup */ }; // optional cleanup
// }, [dependencies]); // optional dependency array

// 3 Forms Based on Dependency Array:
// 1. No array:     useEffect(fn)        → runs after EVERY render
// 2. Empty array:  useEffect(fn, [])    → runs ONCE on mount only
// 3. With values:  useEffect(fn, [a,b]) → runs when a or b changes

// Common Side Effects:
// - Data fetching (API calls)
// - Setting up subscriptions (WebSocket, event listeners)
// - Manually changing the DOM (document.title)
// - Setting timers (setTimeout, setInterval)
// - Logging / Analytics

// Cleanup Function:
// Return a function from useEffect to clean up:
// useEffect(() => {
//   const sub = subscribe(topic);
//   return () => unsubscribe(sub); // runs before next effect or unmount
// }, [topic]);

// Why cleanup matters:
// - Prevents memory leaks
// - Avoids stale closures
// - Clears timers/intervals so they don't keep running

// Common Mistakes:
// ❌ Forgetting dependencies → stale data / infinite loop
// ❌ Missing cleanup → memory leaks
// ❌ Async function directly in useEffect → use inner async fn instead
//    ✅ useEffect(() => { const fetch = async () => {...}; fetch(); }, []);

// React 18 StrictMode runs effects TWICE in development to catch bugs!
