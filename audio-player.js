// Check if the audio player already exists
var audioPlayer = document.getElementById('audioPlayer');

// If the audio player doesn't exist, create it
if (!audioPlayer) {
  audioPlayer = document.createElement('audio');
  audioPlayer.id = 'audioPlayer';
  audioPlayer.src = 'img/Mahika.mp3';
  audioPlayer.autoplay = true;
  audioPlayer.loop = true; 
  document.body.appendChild(audioPlayer);
}

// Object to keep track of the playback state
var playbackState = {
  isPlaying: false,
  currentTime: 0
};

// Function to resume playback from the last position
function resumePlayback() {
  audioPlayer.currentTime = playbackState.currentTime;
  audioPlayer.play();
}

// Play audio when tab becomes visible
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible') {
      if (playbackState.isPlaying) {
        resumePlayback();
      }
    } else {
      if (playbackState.isPlaying) {
        playbackState.currentTime = audioPlayer.currentTime;
        audioPlayer.pause();
      }
    }
  });

// Select all the sections where you want the song to play
var sections = document.querySelectorAll('.section-1, .section-2, .section-3,  .section-4, .section-5');

// Attach an event listener to each section
sections.forEach(function(section) {
  section.addEventListener('mouseenter', function() {
    if (!playbackState.isPlaying) {
      resumePlayback();
      playbackState.isPlaying = true;
    }
  });

  section.addEventListener('mouseleave', function() {
    if (playbackState.isPlaying) {
      playbackState.currentTime = audioPlayer.currentTime;
      audioPlayer.pause();
      playbackState.isPlaying = false;
    }
  });
});
