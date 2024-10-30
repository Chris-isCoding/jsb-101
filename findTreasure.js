import { isTree, isTreasure, makeAnnouncement } from './treasureHelpers.js';

const entry = document.querySelector('.entry'); // select the entry div (parent of the game board)
let stepsCounter = 0;

function findTreasure(event) {
  if (isTree(event)) {
    stepsCounter++;
  } else if (isTreasure(event)) {
    stepsCounter++;
    makeAnnouncement(stepsCounter);
    // reset the counter and remove the event listener when the treasure is found
    stepsCounter = 0;
    entry.removeEventListener('pointerover', findTreasure);
  }
}

function hideTreasure() {
  const randomNumber = Math.floor(Math.random() * forest.length);
  forest[randomNumber].classList.add('treasure');
}

export { entry, findTreasure };
