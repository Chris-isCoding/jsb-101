const images = {
  treasure: '🎁',
  pumpkin: '🎃',
};

// check if the current cell is a treasure
const isTreasure = (e) => {
  if (e.target.matches('.treasure')) {
    e.target.innerHTML = images.treasure;
    return true;
  }
};

// check if the current cell is a tree // ghost
function isTree(event) {
  if (event.target.className === 'tree') {
    event.target.innerHTML = images.pumpkin;
    return true;
  }
}

// function to make announcement when the treasure is found
function makeAnnouncement(counter) {
  const announcement = document.body.appendChild(document.createElement('div'));

  announcement.innerText = `Bravo!! You found the treasure after ${counter} steps`;
  announcement.style.fontSize = '2rem';
}

export { isTreasure, isTree, makeAnnouncement };
