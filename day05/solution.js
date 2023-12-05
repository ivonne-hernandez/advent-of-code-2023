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
  const mapRanges = {
    seedToSoil: [],
    soilToFertilizer: [],
    fertilizerToWater: [],
    waterToLight: [],
    lightToTemperature: [],
    temperatureToHumidity: [],
    humidityToLocation: [],
  };

  let currentMapKey = '';

  input.forEach((line, i) => {
    const maybeMapName = findMapName(line);
    if (maybeMapName) {
      currentMapKey = maybeMapName;
    }
    if (isLineOfNumbers(line)) {
      const [destStart, sourceStart, rangeLength] = line.split(' ').map(num => Number(num));
      mapRanges[currentMapKey].push({ destStart, sourceStart, rangeLength });
    }
  });

  return mapRanges;
};

const calculateDestination = (mapRanges, key) => {
  const matchingRange = mapRanges.find(range => {
    const { sourceStart, rangeLength } = range;
    return sourceStart <= key && key < sourceStart + rangeLength;
  });

  if (!matchingRange) return key;

  const { destStart, sourceStart } = matchingRange;
  let keyToSourceDiff = key - sourceStart;
  return destStart + keyToSourceDiff;
};

const calculateLowestLocation = (seeds, maps) => {
  let lowestLocation;

  seeds.forEach(seed => {
    let key = seed;
    key = calculateDestination(maps.seedToSoil, key);
    key = calculateDestination(maps.soilToFertilizer, key);
    key = calculateDestination(maps.fertilizerToWater, key);
    key = calculateDestination(maps.waterToLight, key);
    key = calculateDestination(maps.lightToTemperature, key);
    key = calculateDestination(maps.temperatureToHumidity, key);
    const location = calculateDestination(maps.humidityToLocation, key);
    if (lowestLocation === undefined || location < lowestLocation) {
      lowestLocation = location;
    }
  });

  return lowestLocation;
};

const part1 = (input) => {
  const seeds = Array.from(input[0].matchAll(/\d+/g)).map(match => Number(match[0]));
  const maps = buildMaps(input);
  return calculateLowestLocation(seeds, maps);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
