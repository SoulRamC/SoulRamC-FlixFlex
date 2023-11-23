/*
 * This file hold the model for mongoDb where the user data is stored.
 * */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  favoriteMovies: [
    {
      id: { type: Number, required: true },
      rating: { type: Number, default: 0 },
      imagePath: { type: String, default: null },
    },
  ],
  favoriteSeries: [
    {
      id: { type: Number, required: true },
      rating: { type: Number, default: 0 },
      imagePath: { type: String, default: null },
    },
  ],
});

/* Push the model to the database or pull the existing model and export it */

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
