import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/shad/ui/dialog";
import { PlusSquare } from "lucide-react";
import { Separator } from "../shad/ui/separator";

import { UploadCloud } from "lucide-react";
import UploadWidget from "../UploadWidget";

const CreateModal = () => {
  const [imgUrl, setImgUrl] = useState(null);

  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full p-3 rounded-lg flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all focus-visible:outline-none">
          <PlusSquare />
          <p className="text-neutral-800 sidebar:block hidden">Create</p>
        </DialogTrigger>
        {!imgUrl ? (
          <DialogContent>
            <DialogHeader className="mx-auto">Create New Post</DialogHeader>
            <Separator />
            <div className="flex flex-col gap-4 items-center justify-center h-[500px]">
              <UploadCloud className="w-16 h-16 text-neutral-600" />
              <p className="font-semibold text-sm">
                Drag photos and video here
              </p>
              <UploadWidget setImgUrl={setImgUrl} />
            </div>
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogHeader className="mx-auto">Additional Info</DialogHeader>
            <Separator />
            <div className="flex flex-col gap-4 items-center justify-center h-[500px]">
              Image Uploaded
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default CreateModal;
