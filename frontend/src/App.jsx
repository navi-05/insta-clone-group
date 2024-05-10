import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Authentication from './components/shared/Authentication'
import Home from './pages/Home'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello</div>
//   }
// ]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <SignedIn>
        <Home />
      </SignedIn>
      <SignedOut>
        <Authentication />
      </SignedOut>
    </>
  )
}

export default App