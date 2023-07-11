import React from "react";

const ServerCard = ({ id, name, imageUrl, isOwner }) => (
  <div id={id}>
    <img src={imageUrl} alt={`${name} icon`} />
    <h2>{name}</h2>
   
    {isOwner && <span>You're the owner of this server!</span>}
  </div>
);

export default ServerCard;
