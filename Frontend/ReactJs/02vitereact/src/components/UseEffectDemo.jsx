import { useState, useEffect } from "react";

// Day-32: React useEffect Hook - Side effects in functional components

// 1. Basic useEffect - runs after every render
function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); // No dependency array = runs after every render

  return (
    <div>
      <p>Check the page title! Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// 2. useEffect with empty array - runs only on mount (like componentDidMount)
function FetchUserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setUser({ name: "Deepanshu Kashyap", role: "Full Stack Developer" });
      setLoading(false);
    }, 1500);
  }, []); // Empty array = runs only once on mount

  if (loading) return <p>Loading user data...</p>;

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

// 3. useEffect with dependencies - runs when specific values change
function SearchFilter() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const allItems = ["React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB"];

  useEffect(() => {
    if (query.trim() === "") {
      setResults(allItems);
    } else {
      const filtered = allItems.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]); // Runs whenever `query` changes

  return (
    <div>
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search technologies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <ul>
        {results.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

// 4. useEffect with cleanup - important for subscriptions, timers, event listeners
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function!
  }, [isRunning]);

  return (
    <div>
      <h3>Timer: {seconds}s</h3>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setSeconds(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
}

export { TitleUpdater, FetchUserData, SearchFilter, Timer };
export default Timer;
