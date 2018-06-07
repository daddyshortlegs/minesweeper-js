var minesweeper = {

    grid : [[]],
    rowIndex : 0,
    width : 4,
    height : 4,

    addRow : function(c1, c2, c3, c4) {
        var row = [c1, c2, c3, c4];
        this.grid[this.rowIndex] = row;
        this.rowIndex++;
    },

    getGrid : function() {
        return this.grid;
    },

    countMines : function(x, y) {
        if (this.checkForExplosion(this.grid[y][x])) return "*";

        var startX = x - 1;
        var count = 0;

        count = count + this.countRow(startX, y - 1);
        count = count + this.countRow(startX, y + 1);
        count = count + this.countSingular(x - 1, y);
        count = count + this.countSingular(x + 1, y);

        return count;
    },

    checkForExplosion : function(s) {
        return s === "*";
    },

    countRow : function(startX, y) {
        var count = 0;
        for (var x = startX; x < startX + 3; x++) {
            count = count + this.countSingular(x, y);
        }
        return count;
    },

    countSingular : function(x, y) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            if (this.checkForExplosion(this.grid[y][x])) return 1;
        }
        return 0;
    }
}

export { minesweeper };