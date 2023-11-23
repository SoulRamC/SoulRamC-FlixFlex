"use client";
import React from "react";
import { FiHeart, FiDelete } from "react-icons/fi";

interface FavoriteButtonProps {
  isFavorite: boolean;
  handleAddToFavorites: () => void;
}

function FavoriteButton({
  isFavorite,
  handleAddToFavorites,
}: FavoriteButtonProps) {
  return (
    <button
      onClick={() => handleAddToFavorites()}
      className={`flex items-center bg-red-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none`}
    >
      {isFavorite ? (
        <FiDelete className="mr-2" />
      ) : (
        <FiHeart className="mr-2" />
      )}
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;
