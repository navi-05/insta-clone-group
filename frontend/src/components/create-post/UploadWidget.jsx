import axios from 'axios'
import { Button } from '../shad/ui/button'
import { toast } from 'sonner'
import { format } from 'date-fns'
import { useState } from 'react'
import { Separator } from "../shad/ui/separator";

import { UploadCloud } from "lucide-react";
import { DialogContent, DialogHeader } from '../shad/ui/dialog'

const SERVER_URL = import.meta.env.VITE_SERVER_URL 

const UploadWidget = ({ postData, setPostData }) => {

  const [loading, setLoading] = useState(false)

  async function handleChange(e) {
    try {
      setLoading(true)
      const file = e.target.files[0]

      const data = new FormData()
      data.append("file", file)

      const response = (await axios.post(`${SERVER_URL}/api/upload`, data)).data
      
      if(response.url) {
        toast.success("Image Upload Successfully!", {
          description: `Uploaded on ${format(response.created_at, "do MMMM yyyy")}`,
        })
        setPostData({ ...postData, imgUrl: response.url })
      }
    } catch (error) {
      toast.error("Image couldn't be uploaded! ", { 
        description: "Try again later"
      })
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <DialogContent>
      <DialogHeader className="mx-auto">Create New Post</DialogHeader>
      <Separator />
      <div className="flex flex-col gap-4 items-center justify-center h-[500px]">
        <UploadCloud className="w-16 h-16 text-neutral-600" />
        <p className="font-semibold text-sm">
          Drag photos and video here
        </p>
        <Button className="cursor-pointer" size="sm" variant="blue" asChild>
          <div>
            <label className='cursor-pointer' htmlFor='upload'>
              {loading ? "Uploading..." : "Select from computer"}
            </label>
            <input className='cursor-pointer' type='file' id='upload' onChange={(e) => handleChange(e)} accept=".jpg, .jpeg, .png" hidden />
          </div>
        </Button>
      </div>
    </DialogContent>
  )
}

export default UploadWidget