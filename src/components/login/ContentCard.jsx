import React from "react";

const ContentCard = ({ icon, heading, content }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 mt-6 bg-primary p-6 rounded-lg">
      <p className="text-3xl text-secondary">{icon}</p>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ContentCard;
