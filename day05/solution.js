import readInput from "../read-input.js";

const mapNameToRegex = {
  seedToSoil: /seed-to-soil map:/,
  soilToFertilizer: /soil-to-fertilizer map:/,
  fertilizerToWater: /fertilizer-to-water map:/,
  waterToLight: /water-to-light map:/,
  lightToTemperature: /light-to-temperature map:/,
  temperatureToHumidity: /temperature-to-humidity map:/,
  humidityToLocation: /humidity-to-location map:/,
};

const isLineOfNumbers = (line) => {
  return /^(\d+ ?)+$/.test(line);
};

const findMapName = (line) => {
  if (isLineOfNumbers(line)) return null;

  for (let mapName in mapNameToRegex) {
    const regex = mapNameToRegex[mapName];
    if (regex.test(line)) {
      return mapName;
    }
  }
  return null;
};

const buildMaps = (input) => {
  const maps = {
    seedToSoil: {},
    soilToFertilizer: {},
    fertilizerToWater: {},
    waterToLight: {},
    lightToTemperature: {},
    temperatureToHumidity: {},
    humidityToLocation: {},
  };

  let currentMapKey = '';

  input.forEach((line, i) => {
    const maybeMapName = findMapName(line);
    if (maybeMapName) {
      currentMapKey = maybeMapName;
    }
    if (isLineOfNumbers(line)) {
      const [destStart, sourceStart, rangeLength] = line.split(' ').map(num => Number(num));
      for (let i = 0; i < rangeLength; i++) {
        maps[currentMapKey][sourceStart + i] = destStart + i;
      }
    }
  });

  return maps;
};

const part1 = (input) => {
  const seeds = Array.from(input[0].matchAll(/\d+/g)).map(match => Number(match[0]));
  const {
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemperature,
    temperatureToHumidity,
    humidityToLocation
  } = buildMaps(input);

  const seedLocations = seeds.map(seed => {
    let key = seed;
    key = key in seedToSoil ? seedToSoil[key] : key;
    key = key in soilToFertilizer ? soilToFertilizer[key] : key;
    key = key in fertilizerToWater ? fertilizerToWater[key] : key;
    key = key in waterToLight ? waterToLight[key] : key;
    key = key in lightToTemperature ? lightToTemperature[key] : key;
    key = key in temperatureToHumidity ? temperatureToHumidity[key] : key;
    const location = key in humidityToLocation ? humidityToLocation[key] : key;
    return location;
  });

  return Math.min(...seedLocations);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
