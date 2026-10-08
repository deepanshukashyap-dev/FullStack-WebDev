import React from "react";

const UserContext = React.createContext()

export default UserContext


// Global Storage Box. Inside that box, you defined two things:
// user: The actual data (initially empty).
// setUser: A function (like a remote control) to change what's inside the box.