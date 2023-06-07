const API='https://api.deezer.com/search/artist/';
const { Router } = require('express');
const router = Router();

router.get('/search/artist', async (req, res) => {
  try {
    const { q } = req.query;
    let {i}=req.query;
    i=i|0;
    if (!q) throw 'Parametro de busqueda Vacio';
    const axios = require('axios');
    const response = await axios.get(`${API}?q=${q}&index=${i}&limit=2&output=json`);
    const { data } = response;

    if (data.error) throw data.error.message;
   res.json({
     result: 1,
     data: data.data,
   });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/search/track', async (req, res) => {
  try {
    const { q } = req.query;
    let {i}=req.query;
    i=i|0;
    if (!q) throw 'Parametro de busqueda Vacio';
    const axios = require('axios');
    const response = await axios.get(`https://api.deezer.com/search?q=track:"${q}"`);
    const { data } = response;

    if (data.error) throw data.error.message;
    res.json({
        result: 1,
        data:data.data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/get/random/artist', async (req, res) => {
  try {

    const axios = require('axios');
    const response = await axios.get(`https://api.deezer.com/chart`);
    const { data } = response;

    if (data.error) throw data.error.message;


    res.json({
      result: 1,
      data: data.artists.data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/get/random/tracks', async (req, res) => {
  try {
    const axios = require('axios');
    const response = await axios.get(`https://api.deezer.com/chart`);
    const { data } = response;

    if (data.error) throw data.error.message;

    res.json({
      result: 1,
      data: data.tracks.data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/get/random/albums', async (req, res) => {
  try {
    const axios = require('axios');
    const response = await axios.get(`https://api.deezer.com/chart`);
    const { data } = response;

    if (data.error) throw data.error.message;

    res.json({
      result: 1,
      data: data.albums.data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});

router.get('/get/music/artist', async (req, res) => {
  try {
    const { artist } = req.query;
    let { i } = req.query;
    i = i | 0;
    const axios = require('axios');
    const response = await axios.get(
      `https://api.deezer.com/artist/${artist}/top?limit=50`
    );
    const { data } = response;
    if (data.error) throw data.error.message;
    res.json({
      result: 1,
      data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});


 const { M_music,M_album,M_artist } = require('../models/music');
router.get('/artist/:id', async (req, res) => {
  try {
     const id = req.params.id || null;
     const artistDB = await M_artist.findOne({ _id: id });
       if (!artistDB) {
         throw 'NO EXISTEN DATOS DEL ID PROPORCIONADO';
       }
    const albumDBID = await M_album.find({ "artist._id": artistDB._id });
    res.json({
      result: 1,
      data: { ...artistDB.toObject(), albumDBID },
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/artist', async (req, res) => {
  try {
   
     const artistDB = await M_artist.find();   
    if (!artistDB) {
      throw 'NO EXISTEN DATOS DEL ID PROPORCIONADO';
    }
    res.json({
      result: 1,
      data: artistDB.map(a=>a),
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/album', async (req, res) => {
  try {
   
     const albumDB = await M_album.find();   
   
    res.json({
      result: 1,
      data: albumDB.map(a=>a),
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});
router.get('/album/:id', async (req, res) => {
  try {
    const id=req.params.id;
     const albumDBID = await M_album.findOne({ _id: id });
     
     if (!albumDBID) {
       throw 'NO EXISTEN DATOS DEL ID PROPORCIONADO';
     }

     const music = await M_music.find({ 'album._id': id }).limit(5); 
    res.json({
      result: 1,
      data: { ...albumDBID.toObject() , music},
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
});

module.exports = router;