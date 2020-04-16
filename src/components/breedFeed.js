import React from "react";
import BreedItem from "./breedItem";

const BreedFeed = ({ breeds }) => {
  return breeds.map(breed => <BreedItem key={breed._id} breed={breed} />);
};

export default BreedFeed;