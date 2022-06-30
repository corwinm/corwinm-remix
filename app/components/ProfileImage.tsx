import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <img
      className="h-56 w-56 rounded-full z-0 m-auto mt-8 md:absolute md:right-28 md:-bottom-8"
      src="/profile-guest.jpg"
      alt="Corwin's profile"
    />
  );
};

export default ProfileImage;
