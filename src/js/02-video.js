import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

loadPage();
player.on('timeupdate', onPlay);

function onPlay(data) {
  try {
    const timeUpdate = JSON.stringify(data);
    return localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, timeUpdate);
  } catch (error) {
    console.error('Set state error: ', error.message);
    return [];
  }
}

function getTime() {
  try {
    const saveTime = JSON.parse(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME));
    return saveTime || [];
  } catch (error) {
    console.error('Set state error: ', error.message);
    return [];
  }
}

function loadPage() {
  const create = getTime();

  player.setCurrentTime(create.seconds || 0);
}
