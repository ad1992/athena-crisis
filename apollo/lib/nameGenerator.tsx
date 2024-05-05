import arrayShuffle from 'array-shuffle';

const NAMES = [
  'Albatross',
  'Alpaca',
  'Ant',
  'Antelope',
  'Ape',
  'Armadillo',
  'Baboon',
  'Barracuda',
  'Bat',
  'Bear',
  'Beaver',
  'Bee',
  'Bison',
  'Boar',
  'Buffalo',
  'Butterfly',
  'Camel',
  'Cassowary',
  'Cat',
  'Caterpillar',
  'Cheetah',
  'Chicken',
  'Chimpanzee',
  'Cobra',
  'Coyote',
  'Crab',
  'Crane',
  'Crocodile',
  'Crow',
  'Deer',
  'Dinosaur',
  'Dog',
  'Dolphin',
  'Donkey',
  'Dragonfly',
  'Duck',
  'Eagle',
  'Eel',
  'Elephant',
  'Elk',
  'Falcon',
  'Fish',
  'Flamingo',
  'Fox',
  'Frog',
  'Gazelle',
  'Giraffe',
  'Goat',
  'Goose',
  'Gorilla',
  'Grasshopper',
  'Hamster',
  'Hawk',
  'Hedgehog',
  'Hippopotamus',
  'Hornet',
  'Horse',
  'Hyena',
  'Ibex',
  'Ibis',
  'Jaguar',
  'Jellyfish',
  'Kangaroo',
  'Koala',
  'Lemur',
  'Leopard',
  'Lion',
  'Llama',
  'Lobster',
  'Mallard',
  'Mantis',
  'Meerkat',
  'Mole',
  'Mongoose',
  'Monkey',
  'Mouse',
  'Mosquito',
  'Mule',
  'Narwhal',
  'Nightingale',
  'Octopus',
  'Ostrich',
  'Otter',
  'Owl',
  'Oyster',
  'Panther',
  'Parrot',
  'Pelican',
  'Penguin',
  'Pony',
  'Quail',
  'Rabbit',
  'Raccoon',
  'Raven',
  'Reindeer',
  'Rhinoceros',
  'Scorpion',
  'Seahorse',
  'Shark',
  'Sheep',
  'Sparrow',
  'Squirrel',
  'Swan',
  'Tiger',
  'Turtle',
  'Viper',
  'Walrus',
  'Wasp',
  'Whale',
  'Wolf',
  'Wombat',
  'Zebra',
];

export default function nameGenerator(): () => string {
  const names = arrayShuffle(NAMES);
  let next = 0;
  return () => {
    if (next >= names.length) {
      next = 0;
    }
    return names.at(next++)!;
  };
}
