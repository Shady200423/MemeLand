document.getElementById('generate').addEventListener('click', function() {
    const videoSelection = document.getElementById('video').value;
    const musicSelection = document.getElementById('music').value;
    const captionText = document.getElementById('caption').value;
    
    const videoPlayer = document.getElementById('videoPlayer');
    const audioPlayer = document.getElementById('audioPlayer');
    const captionPreview = document.getElementById('caption-preview');
    
    // Imposta il video selezionato
    videoPlayer.src = videoSelection;
    videoPlayer.load();
    videoPlayer.play();
    
    // Imposta l'audio selezionato
    audioPlayer.src = musicSelection;
    audioPlayer.load();
    audioPlayer.play();
    
    // Mostra la didascalia
    captionPreview.textContent = captionText;
    captionPreview.style.display = 'block';
});

document.getElementById("generate").addEventListener("click", function() {
    let music = document.getElementById("music").value;
    let video = document.getElementById("video").value;

    // Imposta e riproduce il video
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = video;
    videoPlayer.play();

    // Imposta e riproduce l'audio
    let audio = document.getElementById("audioPlayer");
    audio.src = music;
    audio.play();

    // Se il video va in pausa, ferma anche l'audio
    videoPlayer.addEventListener("pause", function() {
        audio.pause();
    });

    // Se il video viene riprodotto di nuovo, riprendi anche l'audio
    videoPlayer.addEventListener("play", function() {
        audio.play();
    });
});