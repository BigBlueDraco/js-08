import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player(document.querySelector('iframe'));
const PLAYER_TIME_KEY = "player-time"

let lastPlayerTime = 0;  
if(localStorage.getItem(PLAYER_TIME_KEY) != null){
    lastPlayerTime = localStorage.getItem(PLAYER_TIME_KEY); 
}

player.on('timeupdate',  throttle(() => {
    onTimeUpdate()
  }, 1000));

function onTimeUpdate(){   
    player.getCurrentTime().then( function(seconds) {
    localStorage.setItem(PLAYER_TIME_KEY, seconds)
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log(`${error.name}: the time was less than 0 or greater than the video’s duration`)
            break;
            default:
                console.log(error.name)
             break;
        }
    });    
}

player.setCurrentTime(lastPlayerTime)

