module.exports = class Covid {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.directions = [this.x, this.y + 1]
    }
    
    infect() {
      let newX = this.x;
      let newY = this.y + 1;
  
      if (matrix[newX][newY]) {
        matrix[newX][newY] = 5
        matrix[this.x][this.y] = 0
      }
  
      this.x = newX
      this.y = newY
    }
}