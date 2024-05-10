// HOME PAGE 
import NewsFeed from '@/components/home/NewsFeed'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Home = () => {
  return (
    <div>

      {/* Wrapper - Flex Container (Sidebar & Main Content) */}
      <div className='flex flex-row '>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <NewsFeed />
      </div>

    </div>
  )
}

export default Home

