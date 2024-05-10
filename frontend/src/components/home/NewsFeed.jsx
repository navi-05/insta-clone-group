import axios from "axios";
import { BookmarkIcon, HeartIcon, MessageCircleIcon, MoreHorizontal, SendIcon, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "../shad/ui/separator";
import Stories from "./Stories";
import SideContent from "./SideContent";

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
    <div className="flex w-full pl-[250px] justify-center gap-10 mt-4">
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center">
        <div>
          <Stories />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          {posts.map((post, i) => (
            <div key={i}>
              <div className="flex flex-col gap-2">
                {/* User_pic,location, created_at and actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <img src={post?.userId?.photo} alt="user photo" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col gap-0">
                      <p className="text-sm font-medium">{post?.userId?.firstName + " " + post?.userId?.lastName}</p>
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

                {/* Image and Likes */}
                <div className="flex flex-col gap-2">

                  <img
                    src={post.imgUrl}
                    alt="postImage"
                    className="w-[468px] h-full object-cover object-center rounded-sm"
                  />

                  <div className="flex justify-between p-2">
                    <div className="flex gap-4">
                      <HeartIcon />
                      <MessageCircleIcon />
                      <SendIcon />
                    </div>
                    <div>
                      <BookmarkIcon />
                    </div>
                  </div>

                  {/* Like counts */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral-300" />
                    <p className="text-neutral-600 text-sm">
                      <span className="font-medium text-black">1,826</span> Likes
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-2 text-[12px]">
                  <p className="font-medium">Name</p>
                  <p>{post.caption}</p>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </div>

      {/* Side Content */}
      <SideContent />
    </div>
  );
};

export default NewsFeed;
