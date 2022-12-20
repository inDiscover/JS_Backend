const videoStream = new Promise(createStream);
videoStream
  .then((result) => downloadVideoFromYoutube(result))
  .then((video) => downloadAudioFromYoutube(video))
  .then((result) => mixAudioAndVideo(result))
  .then((video) => uploadVideoToYoutube(video))
  .catch((error) => console.log("oops...something went wrong")); // the main reason why this error handled like that is, we can not know which then() function failed.
