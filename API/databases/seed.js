const bcrypt = require("bcrypt");
const saltRounds = 10;
var password = bcrypt.hashSync("123456", saltRounds);

const userDefault={
    full_name: "USER ADMIN",
    name: "COHORTE11",
    lastname: "NO COUNTRY",
    identity: "999999999999",
    email: "test@test.com", //email primary
    phone: "+593961255848",
    user: {
      name: "admin",
      password,
      active: true,
      role: "ADMIN"
    },
};

const { M_person } = require('../models/person');
const createDefaultUser = async () => {
        try {
            const userDB = await M_person.findOne({"user.name": userDefault.user.name});   
            if(!userDB){
                const user = new M_person(userDefault);
                await user.save();
                console.log("USUARIO ADMINISTRADOR CREADO");
            }
        } catch (error) {
            console.log(error);
        }
    }


/* let artist = [
  'Freddie Mercury',
  'Alicia Keys',
  'Ed Sheeran',
  'Jennifer Lopez',
  'Frank Sinatra',
  'Lady Gaga',
  'Daddy Yankee',
  'Harry Styles',
  'Beyoncé',
]; */
let artist = ['Freddie Mercury', 'Alicia Keys', 'Ed Sheeran', 'Jennifer Lopez'];

const creatDefaultArtist = async () => {
  try {
    const { M_artist } = require('../models/music');
    const { M_music } = require('../models/music');
    const { M_album } = require('../models/music');


    for (let i = 0; i < artist.length; i++) {
        const q = artist[i];
        let url = `https://api.deezer.com/search?q=artist:"${q}"`;
        const axios = require('axios');
        const response = await axios.get(url);
        let { data } = response;
        if (data.error) throw data.error.message;

        data=data.data;
   
        
        for (let y = 0; y < data.length;y++) {
            let artist = data[y].artist;

            if(artist.name!=q){
                console.log('ERROR',artist.name,q);
                continue;
            }

            const artistDB = await M_artist.findOne({ id: artist.id });
            let insArtist = new M_artist();

            console.log('INSERT ', artist.name, data[y].title);
            if (!artistDB) {
              insArtist.name = artist.name;
              insArtist.picture = `https://nocountry.clopezpro.com/public/img/artist/${q}.svg`;
              insArtist.picture_small = artist.picture_small;
              insArtist.picture_medium = artist.picture_medium;
              insArtist.picture_big = artist.picture_big;
              insArtist.picture_xl = artist.picture_xl;
              insArtist.bibliography = 'Loren ---->';
              insArtist.id = artist.id;
              insArtist = await insArtist.save();
            } else {
              insArtist = artistDB;
            }
            let insAlbum = new M_album();
            const album = data[y].album;
            insAlbum.id = album.id;
            insAlbum.title = album.title;
            insAlbum.cover = album.cover;
            insAlbum.cover_small = album.cover_small;
            insAlbum.cover_medium = album.cover_medium;
            insAlbum.cover_big = album.cover_big;
            insAlbum.cover_xl = album.cover_xl;
            insAlbum.label = album.label;
            insAlbum.release_date = album.release_date;
            insAlbum.duration = album.duration;
            insAlbum.artist = {
              _id: insArtist._id,
              name: insArtist.name,
            };

            const albumDB = await M_album.findOne({ id: insAlbum.id });
            if (!albumDB) {
              insAlbum = await insAlbum.save();
            } else {
              insAlbum = albumDB;
            }
          /*   console.log(insAlbum._id);
            return; */

            let insMusic = new M_music();

            insMusic.id = data[y].id;
            insMusic.title = data[y].title;
            insMusic.title_short = data[y].title_short;
            insMusic.explicit_lyrics = data[y].explicit_lyrics;
            insMusic.preview = data[y].preview;
            insMusic.duration = data[y].duration;
            insMusic.artist = {
              _id: insArtist._id,
              name: insArtist.name,
            };

            insMusic.album._id=insAlbum._id;
            insMusic.album.title=insAlbum.title;

              
            const musicDB = await M_music.findOne({ id: insMusic.id });
            if (!musicDB) {
              insMusic = await insMusic.save();
            }
        }


        
    }


  } catch (error) {
    console.log(error);
  }
};



const start=async()=>{
    await createDefaultUser();
    await creatDefaultArtist();
}

module.exports = start;