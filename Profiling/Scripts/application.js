var Profiler = Profiler || {};

Profiler.main = (function () {

    function createTile() {
        var tile = $("<div></div>");
        tile.css("width", "60px");
        tile.css("height", "60px");
        tile.css("background-color", "orange");
        tile.css("margin", "2px");
        tile.css("float", "left");

        return tile;
    }

    function createRow() {
        var row = $("<div></div>");
        row.css("clear", "both");
        return row;
    }

    function setBackground(tile, i, j, k, max) {
        tile.css("background-color", "rgb(" + Math.round(i * 255 / max) + "," + Math.round(j * 255 / max) + ", " + Math.round(k * 255 / max) + ")");
        tile.css("color", "rgb(" + (255 - Math.round(i * 255 / max)) + "," + (255 - Math.round(j * 255 / max)) + ", " + (255 - Math.round(k * 255 / max)) + ")");
    }

    function setText(tile) {
        var offset = tile.offset();
        tile.html(offset.left + "<br />" + offset.top);
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

    function setClickHandler(tile) {
        tile.on("click", tileClickHandler);
    }

    function initColorDiagramm() {
        var max = 15;
        var container;
        var counter = 0;
        var content = $("#content");

        for (var i = 0; i < max; i++) {
            for (var j = 0; j < max; j++) {
                for (var k = 0; k < max; k++) {
                    
                    if (counter % max == 0) {
                        container = createRow();
                        content.append(container);
                    }
                    var tile = createTile();
                    container.append(tile);
                    setBackground(tile, i, j, k, max);
                    setText(tile);
                    setClickHandler(tile);
                    counter++;
                }
            }
        }
    }

    return {
        initColorDiagramm: initColorDiagramm
    }

})();