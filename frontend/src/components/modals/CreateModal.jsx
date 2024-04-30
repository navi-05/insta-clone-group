import { Dialog, DialogTrigger } from "@/components/shad/ui/dialog";
import { PlusSquare } from "lucide-react";
import { useState } from "react";

import AdditionalInfo from "../create-post/AdditionalInfo";
import UploadWidget from "../create-post/UploadWidget";
import { useModal } from "@/hooks/use-modal";

const CreateModal = () => {
  const [postData, setPostData] = useState({
    imgUrl: "g",
    caption: "",
    location: "",
  });

  const [submitting, setSubmitting] = useState(false)
  const { open, setOpen } = useModal()

  const createPost = async (e) => {
    e.preventDefault()
    console.log(postData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full p-3 rounded-lg flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all focus-visible:outline-none">
        <PlusSquare />
        <p className="text-neutral-800 sidebar:block hidden">Create</p>
      </DialogTrigger>
      {!postData.imgUrl ? (
        <UploadWidget postData={postData} setPostData={setPostData} />
      ) : (
        <AdditionalInfo
          submitting={submitting}
          createPost={createPost}
          postData={postData}
          setPostData={setPostData}
        />
      )}
    </Dialog>
  );
};

export default CreateModal;
