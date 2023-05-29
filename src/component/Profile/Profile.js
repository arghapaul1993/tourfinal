import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Profile.css';
import image from './avatar.png';

const AnimatedAvatar = () => {
  const name = localStorage.getItem('first_name');
  return (
    <div className="avatar-container">
      <AvatarEditor
        image={image}
        width={250}
        height={200}
        borderRadius={100}
        color={[255, 255, 255, 0.6]}
        scale={1}
        rotate={0}
      />
      <div>
        <span className="gradient-text blink" style={{ fontSize: '20px', backgroundImage: 'linear-gradient(135deg, cyan, #71b7e6, #9b59b6, tomato)' }}>
          {`Hii!! ${name}, let's Post Something Today`}
        </span>
      </div>
    </div>
  );
};

const Profile = () => {
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);


  const id = localStorage.getItem('id');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('file', file);

    try {
      const response = await fetch(`http://35.78.201.111:3008/user/post/add/64745d68056c741e350a31ef`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log(response)
        console.log('Post created');
      } 
    } catch (error) {
      console.log(error);
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="profile-form-container">
      <div className="profile">
        <h1>Profile</h1>
        <AnimatedAvatar />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="">
          <Box
            display="flex"
            flexDirection="column"
            padding={3}
            borderRadius={5}
            backgroundColor="white"
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              padding="2%"
              color="gray"
              sx={{ marginBottom: 2 }}
            >
              POST
            </Typography>
            <TextField
              placeholder="Caption"
              name="caption"
              margin="normal"
              type="text"
              value={caption}
              onChange={handleCaptionChange}
              required
            />
            <TextField
              placeholder="Upload image"
              type="file"
              name="file"
              onChange={handleFileChange}
              required
            />
            <Button
              type="submit"
              sx={{ borderRadius: 3, marginTop: 3 }}
              variant="contained"
              color="primary"
            >
              Post
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Profile;
