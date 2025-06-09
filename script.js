 document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio-player");
    const source = audio.querySelector("source");
    const nowPlaying = document.getElementById("now-playing");

    const songs = {
      "Jo Tum Mere Ho": "audios/mereho.mp3",
      "Husn": "audios/husn.mp3",
      "Qaafirana": "audios/qaafirana.mp3",
      "Zaroor": "audios/zaroor.mp3",
      "Doorie": "audios/doorie.mp3",
      "Baarish": "audios/baarish.mp3",
      "Saudebazzi": "audios/saudebazzi.mp3",
      "Ishq": "audios/ishq.mp3",
      "Safar": "audios/safar.mp3",
      "Chasni": "audios/chasni.mp3"
    };

    document.querySelectorAll("aside li").forEach((item) => {
      item.addEventListener("click", () => {
        const title = item.innerText.trim();
        const src = songs[title];
        if (src) {
          source.src = src;
          audio.load();
          audio.play();
          nowPlaying.textContent = "Now Playing: " + title;
        } else {
          alert("Audio file for this song is missing.");
        }
      });
    });
  });

