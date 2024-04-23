import { PlusSquare } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/shad/ui/dialog"
import { Separator } from '../shad/ui/separator'

import { UploadCloud } from 'lucide-react'
import { Button } from '../shad/ui/button'

const CreateModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full p-3 rounded-lg flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all focus-visible:outline-none">
        <PlusSquare />
        <p className="text-neutral-800 lg:block hidden">Create</p> 
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mx-auto">
          Create New Post
        </DialogHeader>
        <Separator />

        <div className='flex flex-col gap-4 items-center justify-center h-[500px]'>
          <UploadCloud className='w-16 h-16 text-neutral-600'/>
          <p className='font-semibold text-sm'>Drag photos and video here</p>

          <Button size="sm" variant="blue" asChild>
            <div>
              <label htmlFor='upload'>Select from computer</label>
              <input type='file' id='upload' accept=".jpg, .jpeg, .png" multiple hidden />
            </div>
          </Button>

        </div>
        
      </DialogContent>
    </Dialog>
  )
}

export default CreateModal

