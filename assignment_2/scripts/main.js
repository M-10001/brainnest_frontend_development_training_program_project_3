const SQUARE_SIDE_LENGTH = 9;
const TRIANGLE_SIDES = [5, 6, 7];
const CIRCLE_RADIUS = 4;

let diagonalLength = Math.sqrt(2 * SQUARE_SIDE_LENGTH * SQUARE_SIDE_LENGTH);

console.log(`Square with length ${SQUARE_SIDE_LENGTH} has a diagonal of: ${diagonalLength}`);

let triangleHalfPerimeter = (TRIANGLE_SIDES[0] + TRIANGLE_SIDES[1] + TRIANGLE_SIDES[2]) / 2;
let triangleArea = 1;

for (side in TRIANGLE_SIDES) {
  triangleArea = triangleArea * (triangleHalfPerimeter - TRIANGLE_SIDES[side]);
}

triangleArea = Math.sqrt(triangleHalfPerimeter * triangleArea);

console.log();
console.log(`Triangle with sides of length ${TRIANGLE_SIDES} has an area of: ${triangleArea}`);

let circleCircumfrence = 2 * Math.PI * CIRCLE_RADIUS;
let circleArea = Math.PI * CIRCLE_RADIUS * CIRCLE_RADIUS;

console.log();
console.log(`Circle with radius ${CIRCLE_RADIUS} has circumfrence and area (respectively) of: ${circleCircumfrence}, ${circleArea}`);
