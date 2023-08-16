import React from "react";
import { IMAGE_CDN } from "../Utils/constants";

export const MovieCard = ({ props }) => {
  const { title, backdrop_path, vote_average, overview } = props;
  return (
    <>
      <div className="flex flex-col w-[270px] shadow-lg rounded-lg m-3">
        <img
          src={IMAGE_CDN + backdrop_path}
          alt={title}
          className="rounded-lg"
        />
        <div className="flex justify-between p-2">
          <span className="font-semibold text-lg">{title}</span>
          <span className="font-semibold">⭐ {vote_average}</span>
        </div>
        <span className="mx-2">{overview.slice(0, 75)}...</span>
      </div>
    </>
  );
};