function Controller() {
    function doClick() {
        var url = "http://" + $.input.value + "/H";
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("Connection Error");
            },
            timeout: 5e3
        });
        xhr.open("GET", url);
        xhr.send();
    }
    function doClick1() {
        var url = "http://" + $.input.value + "/L";
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("Connection Error");
            },
            timeout: 5e3
        });
        xhr.open("GET", url);
        xhr.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        color: "#000",
        top: "60dp",
        text: "Internet of Things Relay",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.input = Ti.UI.createTextField({
        top: "100dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: "250dp",
        height: "60dp",
        id: "input",
        value: "192.168.2.5"
    });
    $.__views.index.add($.__views.input);
    $.__views.__alloyId0 = Ti.UI.createButton({
        top: "200dp",
        title: "On",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    doClick ? $.__views.__alloyId0.addEventListener("click", doClick) : __defers["$.__views.__alloyId0!click!doClick"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        top: "300dp",
        title: "Off",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    doClick1 ? $.__views.__alloyId1.addEventListener("click", doClick1) : __defers["$.__views.__alloyId1!click!doClick1"] = true;
    $.__views.Logo = Ti.UI.createImageView({
        top: "400dp",
        id: "Logo",
        image: "/SmartUp_2.jpg"
    });
    $.__views.index.add($.__views.Logo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId0!click!doClick"] && $.__views.__alloyId0.addEventListener("click", doClick);
    __defers["$.__views.__alloyId1!click!doClick1"] && $.__views.__alloyId1.addEventListener("click", doClick1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;