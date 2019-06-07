var G = 5;

var pointMassHandler = new PointMassHandler([
  // format: (mass, [posx,posy,posz], [velx,vely,velz])
  new PointMass(1000, [0, 0, 0], [0, 0, 0]),
  new PointMass(50, [200, 0, 0], [0, 5, 0]),
  new PointMass(50, [-400, 0, 0], [0, -3, 0]),
  new PointMass(50, [0, 100, -400], [2, 0, 0]),
  new PointMass(50, [0, 0, -300], [-2, 0, 0]),
]);

// var n = 8;
// for (let i = 0; i < n; i++) {
//   var mass = Math.random() * 400 - 200;

//   var x = Math.random() * 400 - 200;
//   var y = Math.random() * 400 - 200;
//   var z = Math.random() * 400 - 200;

//   var vx = Math.random() * 2 - 1;
//   var vy = Math.random() * 2 - 1;
//   var vz = Math.random() * 2 - 1;

//   pointMass = new PointMass(mass, [x, y, z], [vx, vy, vz]);
//   pointMassHandler.pointMassList.push(pointMass);
// }

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
}
function draw() {
  background(0);
  scale(1, -1);

  ambientLight(60, 60, 60);

  // LOGIC
  pointMassHandler.updateVelocities();
  pointMassHandler.updatePositions();

  // DRAWING
  fill(0, 224, 255);
  stroke(0);
  pointMassHandler.displayMasses3D()
}