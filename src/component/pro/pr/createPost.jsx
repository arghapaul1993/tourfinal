import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleImageChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!photo) {
      alert('Please select an image');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('photo', photo);

      const response = await axios.post('http://example.com/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      // Reset form fields
      setCaption('');
      setPhoto(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={caption} onChange={handleCaptionChange} placeholder="Caption" />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
