import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const SERVER_URL = import.meta.env.VITE_SERVER_URL
const NewsFeed = () => {
  const [posts, setPosts] = useState([])

  // Going to fetch my posts from my DB
  useEffect(() => {
    // Data fetching
    async function fetchPosts() {
      const { data } = await axios.get(`${SERVER_URL}/insta-post`)
      setPosts(data.posts)
      }
    fetchPosts()
  }, [])
  
  return (
    <div className="w-screen-md mx-auto grid grid-cols-3">
      {posts.map((post, i) => (
        <div key={i}>
          <img src={post.imgUrl} alt="postImage" className="w-[300px] h-[300px] object-cover object-center" />
          <h1>{post.caption}</h1>
          <p>{post.location}</p>
        </div>
      ))}
    </div>
  )
}

export default NewsFeed