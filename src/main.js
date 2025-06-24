import Phaser from 'phaser';
import Audios from './scenes/Audios';

const config = {
  type:Phaser.AUTO,
  height :600,
  width:720,
    physics: {
    default: 'arcade',
    arcade: {
      gravity:{y:0},
      debug: false
    }
  },
  scene:[Audios],
  backgroundColor:"#dfded6"
}
new Phaser.Game(config);