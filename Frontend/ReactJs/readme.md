# React.js Mastery & Architecture Guide

A comprehensive guide and quick reference covering fundamental and advanced concepts in React, based on hands-on project implementations.

---

## 📌 Milestones & Directory Index

| Folder | Topic / Milestone | Core Concepts |
|---|---|---|
| `01basicsReact` | Introduction to React & JSX | Component architecture, JSX syntax, Virtual DOM |
| `02vitereact` | Vite Build Tool & Tooling | Fast HMR, ESM bundling, React root rendering |
| `03counter` | React State (`useState`) | State hooks, batching, re-renders, setter functions |
| `04talwindcss` | Utility-First Styling with Tailwind | Responsive utility classes, styling components |
| `05bgChanger` | Dynamic State & Event Handling | Inline styling manipulation, interactive UI state |
| `06passwordGenerator` | Hooks in Depth | `useEffect`, `useCallback`, `useRef`, dependency arrays |
| `07router` | Single Page Applications | `react-router-dom`, nested routes, route loaders, URL params |
| `08contextAPI` | Global State Management | `createContext`, `useContext`, Provider patterns without prop drilling |

---

## 🔑 Core Hooks Reference

### 1. `useState`
- Manages local state within a component.
- Triggers re-renders when state changes.

### 2. `useEffect`
- Handles side effects (fetching data, subscriptions, DOM manipulation).
- Controlled by dependency array:
  - `[]` runs once on mount.
  - `[dep]` runs when `dep` changes.
  - Cleanup return function for unmount.

### 3. `useCallback`
- Memoizes function definitions across renders to prevent unnecessary child re-renders.

### 4. `useRef`
- Persists mutable values without triggering re-renders.
- Grants direct access to underlying DOM nodes.

### 5. `useContext`
- Consumes shared values from a Context Provider anywhere down the component tree.