let life = [];
let counter = 0;

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    let number = Math.random();
    if (number > 0.7) {
      life.push({id: counter, alive: true, coords: {x:i, y:j}, neighbors:
				[{x:i-1, y:j-1}, {x:i-1, y:j}, {x:i-1, y:j+1}, {x:i, y:j-1}, {x:i, y:j+1},
				{x:i+1, y:j-1}, {x:i+1, y:j}, {x:i+1, y:j+1}] })
    } else {
      life.push({id: counter, alive: false, coords: {x:i, y:j}, neighbors:
				[{x:i-1, y:j-1}, {x:i-1, y:j}, {x:i-1, y:j+1}, {x:i, y:j-1}, {x:i, y:j+1},
				{x:i+1, y:j-1}, {x:i+1, y:j}, {x:i+1, y:j+1}] })
    }
    counter++;
  }
}

export default life;
