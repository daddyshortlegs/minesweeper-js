import { minesweeper } from "./minesweeper";


describe("Minesweeper", () => {
    it("should add some rows", () => {

        var game = Object.create(minesweeper);

        game.addRow(".", "*", ".", ".");
        game.addRow(".", ".", ".", "*");

        var grid = game.getGrid();

        expect(grid[0][0]).toEqual(".");
        expect(grid[0][1]).toEqual("*");
        expect(grid[0][2]).toEqual(".");
        expect(grid[0][3]).toEqual(".");

        expect(grid[1][0]).toEqual(".");
        expect(grid[1][1]).toEqual(".");
        expect(grid[1][2]).toEqual(".");
        expect(grid[1][3]).toEqual("*");
    });

    it("should count mines", () => {
        var game = Object.create(minesweeper);

        game.addRow(".", "*", ".", ".");
        game.addRow(".", ".", ".", "*");
        game.addRow(".", ".", ".", ".");
        game.addRow("*", ".", ".", "*");

        var count = game.countMines(1, 1);

        expect(count).toEqual(1);
    });

    it("should count mines on right edge", () => {
        var game = Object.create(minesweeper);

        game.addRow(".", "*", ".", ".");
        game.addRow(".", ".", ".", "*");
        game.addRow(".", ".", ".", ".");
        game.addRow("*", ".", ".", "*");

        var count = game.countMines(3, 2);

        expect(count).toEqual(2);
    });

    it("should count mines on left edge", () => {
        var game = Object.create(minesweeper);

        game.addRow(".", "*", ".", ".");
        game.addRow(".", ".", ".", "*");
        game.addRow(".", ".", ".", ".");
        game.addRow("*", ".", ".", "*");

        var count = game.countMines(0, 2);

        expect(count).toEqual(1);
    });

    it("should count mines on top edge", () => {
        var game = Object.create(minesweeper);

        game.addRow(".", "*", ".", ".");
        game.addRow(".", ".", ".", "*");
        game.addRow(".", ".", ".", ".");
        game.addRow("*", ".", ".", "*");

        var count = game.countMines(2, 0);

        expect(count).toEqual(2);
    });

    it("should go boom", () => {
        var game = Object.create(minesweeper);

        game.addRow(".", "*", ".", ".");
        game.addRow(".", ".", ".", "*");
        game.addRow(".", ".", ".", ".");
        game.addRow("*", ".", ".", "*");

        var count = game.countMines(3, 1);

        expect(count).toEqual("*");
    });



});
