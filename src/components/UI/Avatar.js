import React from "react";

// Resources
import image from "../../images/woman.jpg";

// Styles
import { AvatarContainer, AvatarImage } from "../../styles/AvatarStyle";

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImage src={image} alt="Avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
