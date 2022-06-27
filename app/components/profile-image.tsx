import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <img
      className="h-24 w-24 rounded-full m-auto z-0 md:h-56 md:w-56 md:min-w-max md:mt-4 md:mx-4"
      src="/profile-guest.jpg"
      alt="Corwin's profile"
    />
  );
};

export default ProfileImage;
