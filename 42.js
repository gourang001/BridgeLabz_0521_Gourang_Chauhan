//  42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

function solve(circle1, circle2) {
    const { x: x1, y: y1, r: r1 } = circle1;
    const { x: x2, y: y2, r: r2 } = circle2;

    const centers = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return centers <= r1 + r2;
}
  
  
  const circleA = { x: 0, y: 0, r: 5 };
  const circleB = { x: 6, y: 0, r: 5 };
  console.log(solve(circleA, circleB)); 
  
  const circleC = { x: 0, y: 0, r: 5 };
  const circleD = { x: 11, y: 0, r: 5 };
  console.log(solve(circleC, circleD)); 
  