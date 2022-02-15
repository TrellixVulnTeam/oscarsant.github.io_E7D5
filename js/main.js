$(document).ready(function() {

    const players = Array.from(document.querySelectorAll('.js-player')).map(p => {
        const plr = new Plyr(p, {
            controls: [
                'play-large', // The large play button in the center         
                'play', // Play/pause playback      
                'progress', // The progress bar and scrubber for playback and buffering    
                // 'current-time', // The current time of playback    
                // 'duration', // The full duration of the media 
                'mute',
                'fullscreen'

            ],

            // fullscreen: { enabled: false, fallback: false, iosNative: false, container: null }

        })
    });

    const lightBoxCont = document.querySelectorAll('.lightbox--cont');
    lightBoxCont.forEach(el => {
        // console.log(el)

        const lightBox = el.querySelector('.lightbox');
        const closebtn = el.querySelector('.btn-close');
        const videoElement = el.querySelector('video');
        const bclick = el.querySelector('.gallery__item');


        bclick.addEventListener("click", event => {
            lightBox.className = "lightbox open";

            // console.log(lightBox)
        });

        // closebtn.addEventListener("click", event => {
        //     lightBox.className = "lightbox";
        //     videoElement.pause();
        // });

        closebtn.addEventListener("click", event => {
            if (lightBox.className == "lightbox open") {
                lightBox.className = "lightbox";
                videoElement.pause();
            }
        });
    });
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });



});