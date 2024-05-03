import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Stories from "./Stories";
import { Separator } from "../shad/ui/separator";
import { User } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { MapPin } from "lucide-react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  // Going to fetch my posts from my DB
  useEffect(() => {
    // Data fetching
    async function fetchPosts() {
      const { data } = await axios.get(`${SERVER_URL}/insta-post`);
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div className="w-full flex justify-center gap-10 mt-4">
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center">
        <div>
          <Stories />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          {posts.map((post, i) => (
            <>
              <div key={i} className="flex flex-col gap-2">
                {/* User_pic,location, created_at and actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <User className="bg-neutral-100 w-10 h-10 rounded-full p-2" />
                    <div className="flex flex-col gap-0">
                      <p className="text-sm font-medium">Name</p>
                      <p className="text-[10px] text-gray">
                        {post.location}
                      </p>
                    </div>
                    <span className="text-gray text-[12px]">•</span>
                    <p className="text-gray text-[12px]">4d</p>
                  </div>

                  <div>
                    <MoreHorizontal />
                  </div>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={post.imgUrl}
                    alt="postImage"
                    className="w-[468px] h-full object-cover object-center rounded-sm"
                  />
                  {/* Likes */}
                </div>

                <div className="flex items-center gap-2 text-[12px]">
                  <p className="font-medium">Name</p>
                  <p>{post.caption}</p>
                </div>
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>

      {/* Side Content */}
      <div>Side Content</div>
    </div>
  );
};

export default NewsFeed;
