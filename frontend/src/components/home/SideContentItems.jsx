import React from 'react'

const SideContentItems = ({
  userName,
  userImg,
  name
}) => {

  return (
    <div className='flex items-center justify-between'>

      <div className='flex items-center gap-4'>
        <img src={userImg} alt='user-image' className='h-10 w-10 rounded-full'/>
        <div className='text-xs'>
          <p className='font-medium'>{userName}</p>
          <p className='text-gray'>{name}</p>
        </div>
      </div>
      <p className='text-blue text-xs font-medium'>
        Switch
      </p>
    </div>
  )
}

export default SideContentItems