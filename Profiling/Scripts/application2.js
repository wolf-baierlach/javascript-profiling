var Profiler2 = Profiler2 || {};

Profiler2.main = (function () {

    function createTile2() {
        var tile = document.createElement("div");
        tile.style.width = "60px";
        tile.style.height = "60px";
        tile.style.backgroundColor = "orange";
        tile.style.margin = "2px";
        tile.style.float = "left";
        return tile;
    }

    function createRow2() {
        var row = document.createElement("div");
        row.style.clear = "both";
        return row;
    }

    function setBackground2(tile, i, j, k, max) {
        tile.style.backgroundColor = "rgb(" + Math.round(i * 255 / max) + "," + Math.round(j * 255 / max) + ", " + Math.round(k * 255 / max) + ")";
        tile.style.color = "rgb(" + (255 - Math.round(i * 255 / max)) + "," + (255 - Math.round(j * 255 / max)) + ", " + (255 - Math.round(k * 255 / max)) + ")";
    }

    function setText2(tile, x, y) {
        tile.innerHTML = x + "<br />" + y;
    }

    function tileClickHandler() {
        var that = $(this);
        var oldBgColor = that.css("background-color");
        var oldColor = that.css("color");

        that.css("background-color", oldColor);
        that.css("color", oldBgColor);

        setTimeout(function () {
            that.css("background-color", oldBgColor);
            that.css("color", oldColor);
        }, 2000);
    }

    function setClickHandler2(tile) {
        tile.addEventListener("click", tileClickHandler);
    }

    function initColorDiagramm2() {
        var max = 15;
        var container;
        var counter = 0;
        var content = document.getElementById("content");
        var pageMargin = 10;
        var tileWidth = 60;
        var tileMargin = 2;
        var totalWidth = tileWidth + (2 * tileMargin);
        var tileHeight = 60;
        var totalHeight = tileHeight + (2 * tileMargin);
        var col = 0;
        var row = -1;

        for (var i = 0; i < max; i++) {
            for (var j = 0; j < max; j++) {
                for (var k = 0; k < max; k++) {

                    if (counter % max == 0) {
                        container = createRow2();
                        content.appendChild(container);
                        col = 0;
                        row++;
                    }
                    var tile = createTile2();
                    container.appendChild(tile);
                    setBackground2(tile, i, j, k, max); 
                    setText2(tile, (col * totalWidth) + pageMargin, (row * totalHeight) + pageMargin); 
                    setClickHandler2(tile); 
                    counter++;
                    col++;
                }
            }
        }
    }

    return {
        initColorDiagramm2: initColorDiagramm2
    }

})();