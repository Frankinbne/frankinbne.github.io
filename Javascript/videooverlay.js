const helpButton = document.getElementById('help-button');
const videoOverlay = document.getElementById('video-overlay');

helpButton.addEventListener('mouseover', function() {
  videoOverlay.style.display = 'block';
});

helpButton.addEventListener('mouseout', function() {
  videoOverlay.style.display = 'none';
});