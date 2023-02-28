import React from "react";

interface IBlogbaner {
  children: React.ReactNode;
  gradientBG: string;
  bannerImage: string;
  height: string;
  className: string;
}

const Blogbaner = ({
  children,
  gradientBG,
  bannerImage,
  height,
  className = "",
}: IBlogbaner) => {
  const backgroundStyle = {
    backgroundImage: `${gradientBG ? gradientBG : ""} url(${bannerImage}`,
    height: height,
  };
  return (
    <div style={backgroundStyle} className={className}>
      {children}
    </div>
  );
};

export default Blogbaner;
