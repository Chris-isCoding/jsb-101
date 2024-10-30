import { entry, findTreasure } from './findTreasure.js';

import { hideTreasure, restartGame } from './game.js';

window.addEventListener('load', hideTreasure);

const restartButton = document.createElement('button');

restartButton.id - 'restartGame';
restartButton.innerText = 'Restart game';
restartButton.style.cursor = 'pointer';
restartButton.style.fontSize = '2rem';
document.body.appendChild(restartButton);

entry.addEventListener('pointerover', findTreasure);

restartButton.addEventListener('pointerdown', restartGame);
