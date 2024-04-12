// HOME PAGE 
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Home = () => {
  return (
    <div>

      {/* Wrapper - Flex Container (Sidebar & Main Content) */}
      <div className='flex flex-row'>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div>
          Main Content
        </div>
      </div>

    </div>
  )
}

export default Home

