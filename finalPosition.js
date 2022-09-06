function finalPosition(moves){
  let positionX = 0;
  let positionY = 0;
  let position = [];
  for (const move of moves) {
    if (move === 'north'){
      positionY += 1;
    }else if(move === 'south'){
      positionY -= 1;
    }else if(move === 'west'){
      positionX -= 1;
    }else{
      positionX += 1;
    }
  }
  position.push(positionX, positionY);
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));