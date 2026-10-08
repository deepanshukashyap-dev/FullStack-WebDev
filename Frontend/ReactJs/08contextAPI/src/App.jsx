import './App.css'
import UserContextProvider from './context/UserContextProvider'
//UserContextProvider ke andar sBke pass access hoga entity ka
function App() {
  return (
    <UserContextProvider>
      <h1>Learning Context API</h1>
    </UserContextProvider>
  )
}

export default App
