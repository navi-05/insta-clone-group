import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Authentication from './components/Authentication'
import Home from './pages/Home'

function App() {
  return (
    <>
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