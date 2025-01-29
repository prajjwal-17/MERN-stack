import { useState } from 'react';
import { PostComponent } from './PostPerfect';
import './App.css';

function App() {
  const [post, setPost] = useState([
    {
      author: "BLacKDevIL",
      subtitle: "999m",
      time: "2m ago",
      avatar: "https://as2.ftcdn.net/v2/jpg/05/68/27/31/1000_F_568273197_ykDVgBInckEMDtof205IsdEzjif7LZMW.jpg",
      caption: "Hey, I am a Hacker",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBqXnHvVYdSOZQjLMVQ6p_c1UpXdjzs_iYw&s"
    },
    {
      author: "Samridhi Dangwal",
      subtitle: "1m followers",
      time: "12m ago",
      avatar: "/samPFP.jpg",
      caption: "I feel like a princess because I am one!",
      postImage: "/Samridhi.png"
    },
    {
      author: "Prajjwal Rawat",
      subtitle: "1.5m followers",
      time: "1h ago",
      avatar: "/prajjwalPFPnew.JPG",
      caption: "Yo, how do you guys feel today?",
      postImage: "PrajjwalPost.JPG"
    },
    {
      author: "piggiPochu",
      subtitle: "2 followers",
      time: "1 day ago",
      avatar: "/pfp.jpg",
      caption: "Hey there what a beautiful day!",
      postImage: "post.jpg"
    },
  ]);

  // State variables for form inputs
  const [author, setAuthor] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [caption, setCaption] = useState('');
  const [avatar, setAvatar] = useState('');
  const [postImage, setPostImage] = useState('');

  // Rendering each post component
  const postsComponents = post.map((post, index) => (
    <PostComponent
      key={index}
      author={post.author}
      subtitle={post.subtitle}
      caption={post.caption}
      avatar={post.avatar}
      time={post.time}
      postImage={post.postImage}
    />
  ));

  // Add a new post
  function AddPost() {
    if (!author || !caption || !postImage) {
      alert("Please fill out all fields.");
      return;
    }
    setPost([
      {
        author,
        subtitle,
        caption,
        avatar,
        postImage,
        time: "Just now"
      },
      ...post // New post on top
    ]);

    // Clear input fields
    setAuthor('');
    setSubtitle('');
    setCaption('');
    setAvatar('');
    setPostImage('');
  }

  // Delete the last post
  function DeletePost() {
    setPost((prevPosts) => prevPosts.slice(1));
  }
  
  return (
    <div style={{ backgroundColor: "#b2bec3", display: "flex" }}>
      <div style={{ color: "aqua", marginRight: 10, padding: 20 }}>
        <button onClick={AddPost}>Add Post</button>
        <button onClick={DeletePost}>Delete Post</button>
      </div>      
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: 20 }}>
            <input 
              type="text"
              placeholder='Author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{ margin: "5px", padding: "5px" }}
            />
            <input 
              type="text"
              placeholder='Subtitle'
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              style={{ margin: "5px", padding: "5px" }}
            />
            <input 
              type="text"
              placeholder='Caption'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              style={{ margin: "5px", padding: "5px" }}
            />
            <input 
              type="text"
              placeholder='Avatar URL'
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              style={{ margin: "5px", padding: "5px" }}
            />
            <input 
              type="text"
              placeholder='Post Image URL'
              value={postImage}
              onChange={(e) => setPostImage(e.target.value)}
              style={{ margin: "5px", padding: "5px" }}
            />
          </div>
          {postsComponents}
        </div>
      </div>
    </div>
  );
}

export default App;
