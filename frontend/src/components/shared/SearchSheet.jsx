import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../shad/ui/sheet'
import { Input } from '../shad/ui/input'
import { Separator } from '../shad/ui/separator'
import { Button } from '../shad/ui/button'

const SearchSheet = ({ icon: Icon, title }) => {

  return (
    <Sheet>
      <SheetTrigger className='w-full p-3 rounded-sidebar flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all'>
        <Icon />
        {title}
      </SheetTrigger>
      <SheetContent side="left" className="ml-[250px] z-[9]">

        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
          <SheetDescription >
            <Input 
              type="text"
              placeholder="Search"
              className="mt-6"
            />
          </SheetDescription>
        </SheetHeader>

        <Separator className="mt-6" />

        {/* Search Results */}
        <div className='flex flex-col gap-4 mt-6'>
          <div className='flex items-center justify-between w-full'>
            <h3>Recent</h3>
            <Button variant="link" className="text-blue hover:no-underline hover:text-cyan-800">
              Clear all
            </Button>
          </div>
          <div>
            Search Results
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}

export default SearchSheet