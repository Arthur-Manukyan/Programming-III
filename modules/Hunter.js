let LivingCreature = require('./LiveForm')
let weath = "winter";

module.exports = class Hunter extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 8
	}


	move() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}
	eat() {
		var predatorCells = super.chooseCell(1);
		var newCell = predatorCells[Math.floor(Math.random() * predatorCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			for (var i in predatorArr) {
				if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
					predatorArr.splice(i, 1)
				}
			}

			this.x = newX;
			this.y = newY;
			this.energy++;

			if (this.energy >= 12) {
				this.mul();
				this.energy = 8
			}

		}
		else {
			this.move();
		}
	}

	mul() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2
			hunterArr.push(new Hunter(newX, newY, 2))
			this.energy = 6;
		}
		if (weath == "winter") {
			this.energy -= 4;
			this.multiply -= 4;
		}
		if (weath == "summer") {
			this.energy += 2;
			this.multiply += 2;
		}

	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in hunterArr) {
			if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
				hunterArr.splice(i, 1)
			}
		}
	}
}
