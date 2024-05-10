import { Dialog, DialogTrigger } from "@/components/shad/ui/dialog";
import { PlusSquare } from "lucide-react";
import { useState } from "react";

import UploadWidget from "../create-post/UploadWidget";
import AdditionalInfo from "../create-post/AdditionalInfo";
import axios from "axios";
import { toast } from "sonner";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom'

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const CreateModal = () => {
  const [postData, setPostData] = useState({
    imgUrl: "",
    caption: "",
    location: "",
  });

  const { user } = useUser()
  // const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function createPost(e) {
    e.preventDefault();

    try {
      setSubmitting(true);
      const { data } = await axios.post(`${SERVER_URL}/insta-post`, {
        ...postData,
        clerkId: user.id
      });

      if (data) {
        toast.success("Post Created");
        setOpen(false);
        setPostData({});
        // navigate(0)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full p-3 rounded-lg flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all focus-visible:outline-none">
        <PlusSquare />
        <p className="text-neutral-800 sidebar:block hidden">Create</p>
      </DialogTrigger>
      {postData.imgUrl ? (
        <AdditionalInfo
          postData={postData}
          setPostData={setPostData}
          createPost={createPost}
          submitting={submitting}
        />
      ) : (
        <UploadWidget postData={postData} setPostData={setPostData} />
      )}
    </Dialog>
  );
};

export default CreateModal;
