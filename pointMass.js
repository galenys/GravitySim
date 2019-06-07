class PointMass {
    constructor(mass, [x, y, z], [v1, v2, v3]) {
        this.mass = mass;
        this.radius = mass ** (1 / 2)
        this.pos = new p5.Vector(x, y, z);
        this.velocity = new p5.Vector(v1, v2, v3);
    }
}

class PointMassHandler {
    constructor(pointMassList) {
        this.pointMassList = pointMassList;
    }

    getAcceleration(pos1, pos2, m2) {
        var dist = p5.Vector.dist(pos1, pos2);
        // console.log(dist)
        var scalingFactor = G * m2 / (dist * dist);
        // console.log(scalingFactor)
        var acceleration = p5.Vector.sub(pos2, pos1).normalize().mult(scalingFactor);
        // console.log(acceleration)

        return acceleration;
    }

    updatePositions() {
        for (let i = 0; i < this.pointMassList.length; i++) {
            this.pointMassList[i].pos.add(this.pointMassList[i].velocity);
        }
    }
    updateVelocities() {
        for (let i = 0; i < this.pointMassList.length; i++) {
            for (let j = 0; j < this.pointMassList.length; j++) {
                // mass does not affect itself
                if (i != j) {
                    var acceleration = this.getAcceleration(this.pointMassList[i].pos, this.pointMassList[j].pos, this.pointMassList[j].mass);

                    this.pointMassList[i].velocity.add(acceleration)
                }
            }
        }
    }
    displayMasses() {
        for (let i = 0; i < this.pointMassList.length; i++) {
            ellipse(this.pointMassList[i].pos.x, this.pointMassList[i].pos.y, this.pointMassList[i].radius, this.pointMassList[i].radius);
        }
    }
    displayMasses3D() {
        for (let i = 0; i < this.pointMassList.length; i++) {
            var pos = this.pointMassList[i].pos
            translate(pos.x, pos.y, pos.z);
            push();
            normalMaterial();
            sphere(this.pointMassList[i].radius);
            pop();
            translate(-pos.x, -pos.y, -pos.z);
        }
    }
}