import axios from 'axios'
import { Button } from './shad/ui/button'
import { toast } from 'sonner'
import { format } from 'date-fns'

const SERVER_URL = import.meta.env.VITE_SERVER_URL 

const UploadWidget = ({ setImgUrl }) => {

  async function handleChange(e) {
    try {
      const file = e.target.files[0]

      const data = new FormData()
      data.append("file", file)

      const response = (await axios.post(`${SERVER_URL}/api/upload`, data)).data
      
      if(response.url) {
        toast.success("Image Upload Successfully!", {
          description: `Uploaded on ${format(response.created_at, "do MMMM yyyy")}`,
        })
        setImgUrl(response.url)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Button size="sm" variant="blue" asChild>
      <div>
        <label htmlFor='upload'>Select from computer</label>
        <input type='file' id='upload' onChange={(e) => handleChange(e)} accept=".jpg, .jpeg, .png" hidden />
      </div>
    </Button>
  )
}

export default UploadWidget