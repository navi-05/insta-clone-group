import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../shad/ui/sheet'
import { Input } from '../shad/ui/input'
import { Separator } from '../shad/ui/separator'
import { Button } from '../shad/ui/button'

const NotificationSheet = ({ icon: Icon, title }) => {

  return (
    <Sheet>
      <SheetTrigger className='w-full p-3 rounded-sidebar flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all'>
        <Icon />
        {title}
      </SheetTrigger>
      <SheetContent side="left" className="ml-[250px] z-[9]">

        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>

        {/* Activity Logs */}
        <div className='flex flex-col gap-6 mt-6'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold'>This week</h3>
            <div>
              Activity
            </div>
          </div>
          <Separator />
          <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold'>This month</h3>
            <div>
              Activity
            </div>
          </div>
          <Separator />
          <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold'>Earlier</h3>
            <div>
              Activity
            </div>
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}

export default NotificationSheet