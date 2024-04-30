import React from 'react'
import { Label } from "../shad/ui/label";
import { Textarea } from "../shad/ui/textarea";
import { Input } from "../shad/ui/input";
import { Button } from "../shad/ui/button";
import { DialogContent, DialogHeader } from '../shad/ui/dialog';
import { Separator } from "../shad/ui/separator";

const AdditionalInfo = ({ submitting, createPost, postData, setPostData }) => {
  return (
    <DialogContent className="lg:min-w-[800px] w-full">
      <DialogHeader className="mx-auto">Additional Info</DialogHeader>
      <Separator />
      <form onSubmit={createPost} className="mt-4 flex flex-col lg:flex-row gap-10 lg:gap-8">
        <img
          src={postData.imgUrl}
          alt="post-image"
          className="rounded-lg w-full h-[300px] object-cover"
        />

        <div className='min-w-[300px] flex flex-col gap-6'>
          <div className="w-full flex flex-col gap-3 ">
            <Label htmlFor="caption">Caption</Label>
            <Textarea
              id="caption"
              value={postData.caption}
              onChange={(e) =>
                setPostData({ ...postData, caption: e.target.value })
              }
              />
          </div>
          <div className='w-full flex flex-col gap-3'>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={postData.location}
              onChange={(e) =>
                setPostData({ ...postData, location: e.target.value })
              }
              />
          </div>
          <div className="mt-auto w-full flex justify-end  gap-5">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>

            <Button variant="blue" size="sm" type="submit">
              {submitting ? "Posting..." : "Create Post"}
            </Button>
          </div>
        </div>
      </form>
    </DialogContent>
  )
}

export default AdditionalInfo