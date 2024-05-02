import { Label } from "../shad/ui/label";
import { Textarea } from "../shad/ui/textarea";
import { Input } from "../shad/ui/input";
import { Button } from "../shad/ui/button";
import { Separator } from "../shad/ui/separator";
import { DialogContent, DialogHeader } from "../shad/ui/dialog";
import { Loader2 } from "lucide-react";

const AdditionalInfo = ({ postData, setPostData, createPost, submitting }) => {
  return (
    <DialogContent className="lg:min-w-[800px] w-full">
      <DialogHeader className="mx-auto">Additional Info</DialogHeader>
      <Separator />
      <form onSubmit={createPost} className="mt-4 flex flex-col lg:flex-row gap-10 lg:gap-8">

        <img
          src={postData.imgUrl}
          alt="post-image"
          className="rounded-lg w-1/2 h-[300px] object-cover"
        />

        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-3 ">
            <Label htmlFor="caption">Caption</Label>
            <Textarea
              id="caption"
              placeholder="I love a cozy evening!"
              value={postData.caption}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  caption: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Ex: Tea Chamber"
              value={postData.location}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  location: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-auto w-full flex justify-end  gap-5">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>

            <Button variant="blue" size="sm" type="submit">
              {submitting ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Posting
                </div>
              ) : "Create Post"}
            </Button>
          </div>
        </div>
      </form>
    </DialogContent>
  );
};

export default AdditionalInfo;
