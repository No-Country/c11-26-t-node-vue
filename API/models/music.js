
const { Schema, model } = require('mongoose');


const artistScheme = new Schema(
  {
    name: { type: String, trim: true },
    id: { type: Number },
    picture: { type: String, trim: true },
    picture_small: { type: String, trim: true },
    picture_medium: { type: String, trim: true },
    picture_big: { type: String, trim: true },
    picture_xl: { type: String, trim: true },
    bibliography: { type: String, trim: true },
  },
  { timestamps: true }
);
const musicScheme = new Schema({
  title: { type: String, trim: true },
  title_short: { type: String, trim: true },
  id: { type: Number },
  explicit_lyrics: { type: Boolean, default: false },
  preview: { type: String, trim: true },
  duration: { type: Number },
  artist: {
    _id: { type: Schema.ObjectId, ref: 'artists' },
    name: { type: String, trim: true },
  },
  album: {
    _id: { type: Schema.ObjectId, ref: 'albums', required:true },
    title: { type: String, trim: true },
  },
});
const albumScheme = new Schema({
  title: { type: String, trim: true },
  id: { type: Number },
  cover: { type: String, trim: true },
  cover_small: { type: String, default: false },
  cover_medium: { type: String, trim: true },
  cover_big: { type: String, trim: true },
  cover_xl: { type: String, trim: true },
  label: { type: String, trim: true },
  release_date: { type: String, trim: true },
  duration: { type: Number },
  artist: {
    _id: { type: Schema.ObjectId, ref: 'artists' },
    name: { type: String, trim: true },
  },
});
const M_music = model('musics', musicScheme);
const M_album = model('albums', albumScheme);
const M_artist = model('artists', artistScheme);
module.exports = {
  M_music,    
  M_album,
  M_artist
};
