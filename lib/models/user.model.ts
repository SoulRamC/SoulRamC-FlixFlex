import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  favoriteMovies: [
    {
      id: { type: Number, required: true },
      rating: { type: Number, required: true },
      imagePath: { type: String, default: null },
    },
  ],
  favoriteSeries: [
    {
      id: { type: Number, required: true },
      rating: { type: Number, required: true },
      imagePath: { type: String, default: null },
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
