// Converts numeric degrees to radians
function toRad(value) {
  return (value * Math.PI) / 180;
}

/**
 * Calculates the distance between two latitude/longitude points using the Haversine formula.
 * Returns the distance in kilometers.
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1); // Difference in latitude in radians
  const dLon = toRad(lng2 - lng1); // Difference in longitude in radians
  const l1 = toRad(lat1); // Latitude of point 1 in radians
  const l2 = toRad(lat2); // Latitude of point 2 in radians

  // Apply Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in kilometers
  return d;
}

/**
 * Sorts an array of place objects by their distance from a specified latitude and longitude.
 * Each place must have `lat` and `lon` properties.
 */
export function sortPlacesByDistance(places, lat, lon) {
  const sortedPlaces = [...places]; // Create a shallow copy to avoid mutating the original array

  // Sort the places based on their calculated distance to the target location
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);
    return distanceA - distanceB;
  });

  return sortedPlaces;
}
