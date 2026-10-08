import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'//component or method saath me import thats why
// method bhi same folder me prefer component me


//Way-1(nested)
// const router = createBrowserRouter([
//   //Router handling /,/home,/about,/contact pages
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//Way-2(Best for rooy/layout) Route nesting
const router = createBrowserRouter( //Way-2 easy concept wise, / router ke routes
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>     {/*pehle layout aayga*/}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />  {/* /:id ye id dynamic hoti hai , params(user requests) , destructure using params   */}
      <Route
      //loader={()=>{fetch();}} //fetch wagera sab allowed hai ese bhi
      loader = {githubInfoLoader} //method inside loader
      path='github' 
      element={<Github />} 
      />
        
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
