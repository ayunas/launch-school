for( let i = 1; i <= 100; i++) {

  console.log(i*2);

}


let array = [1,2,3,4]
let i = 0;

while(i < array.length) {
  console.log(array[i]);
  i++;
}

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for( let i = 0; i < cities.length; i++) {
  if(cities[i] === null) continue;

  console.log(cities[i].length);

}

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for(let i=0; i<fish.length; i++) {
  if(i === 4) break;
  console.log(fish[i]);
}



