// Day-33: React Event Handling - Notes
// React uses SyntheticEvent - a cross-browser wrapper around the browser's native event

// Common Event Handlers:
// Mouse:    onClick, onDoubleClick, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut
// Form:     onChange, onSubmit, onFocus, onBlur, onReset
// Keyboard: onKeyDown, onKeyUp, onKeyPress (deprecated)
// Touch:    onTouchStart, onTouchEnd, onTouchMove
// Clipboard:onCopy, onPaste, onCut
// Drag:     onDrag, onDrop, onDragStart, onDragEnd

// Important Differences from HTML:
// HTML:    onclick="handleClick()"  ← string
// React:   onClick={handleClick}    ← function reference (NOT calling it!)
// React:   onClick={() => handleClick(arg)} ← calling with args (arrow fn wrapper)

// Preventing Default Behavior:
// e.preventDefault()  → stops form submit page reload, link navigation
// e.stopPropagation() → stops event bubbling up to parent elements

// Event Object (SyntheticEvent) properties:
// e.target          → element that triggered the event
// e.currentTarget   → element the handler is attached to
// e.type            → event type (click, change, etc.)
// e.key             → keyboard key pressed
// e.clientX/clientY → mouse position
// e.target.value    → input field value
// e.target.name     → input field name attribute
// e.target.checked  → checkbox checked state

// Event Delegation in React:
// React attaches all events to the root, not individual elements
// This improves performance for large lists
// Use data attributes to identify which item was interacted with:
// <div onClick={handleClick} data-id="123">

// Passing arguments to handlers:
// ✅ onClick={() => handleDelete(item.id)}
// ✅ onClick={handleDelete.bind(null, item.id)}
// ❌ onClick={handleDelete(item.id)}  ← called immediately on render!
