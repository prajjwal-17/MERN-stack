const style = {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    marginTop: 10,
  };
  
  export function PostComponent({ author, subtitle, caption, avatar, time, postImage }) {
    return (
      <div style={style}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={avatar}
            alt={`${author}'s avatar`}
            style={{
              width: 30,            // Set fixed width for avatar
              height: 30,           // Set fixed height for avatar
              objectFit: "cover",   // Ensure the image scales properly
              borderRadius: "50%",  // Make the avatar circular
            }}
          />
          <div style={{ fontSize: 10, marginLeft: 10 }}>
            <b>{author}</b>
            <div>{subtitle}</div>
            {time !== undefined && (
              <div>
                {time} 
                <img
                  src="https://clipart-library.com/images_k/clock-image-transparent-background/clock-image-transparent-background-14.jpg"
                  alt="Clock icon"
                  style={{ width: 10, height: 10, marginLeft: 5 }}
                />
              </div>
            )}
          </div>
        </div>
        <div style={{ fontSize: 12, marginTop: 10 }}>{caption}</div>
        <div style={{ marginTop: 10 }}>
          <img
            src={postImage}
            alt="Post"
            style={{
              width: "100%",         // Ensures the image takes up the full width of the container
              height: "auto",        // Maintains the image's aspect ratio
              maxWidth: "600px",     // Reasonable max width
              maxHeight: "400px",    // Reasonable max height
              objectFit: "cover",    // Ensures the image scales properly within the given dimensions
              borderRadius: 10,      // Adds a bit of styling to the post image
            }}
          />
        </div>
      </div>
    );
  }
  