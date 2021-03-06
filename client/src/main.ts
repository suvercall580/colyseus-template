import Phaser from 'phaser';
import 'regenerator-runtime/runtime';

import HelloWorldScene from './scenes/HelloWorldScene';
import LobbyScene from './scenes/LobbyScene';
import LoginScene from './scenes/LoginScene';
import GameScene from './scenes/GameScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  // width: 800,
  // height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 896,
    height: 414,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [LoginScene, LobbyScene, GameScene],
  parent: 'app-container',
  dom: {
    createContainer: true,
  },
  backgroundColor: '#e3e3e3',
};

export default new Phaser.Game(config);
