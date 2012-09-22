// init audio player
audiojs.events.ready(function() {
  var audios = document.getElementsByTagName('audio');

  for (var i = 0; i < audios.length; i++) {
    audiojs.create(audios[i]);
  }
})
