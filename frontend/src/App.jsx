import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Authentication from './components/Authentication'

function App() {
  return (
    <>
      <SignedIn>
        <h1>User is signed in</h1>
      </SignedIn>
      <SignedOut>
        <Authentication />
      </SignedOut>
    </>
  )
}

export default App