"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
    }
    // If we implement we don't have to write the abstract
    TakePhoto.prototype.getReelTime = function () {
        return 8;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, busrt) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log(this.cameraMode);
    };
    return Instagram;
}(TakePhoto));
var hc = new Instagram("teast", "Test", 2);
// Able to access the function of the super class from the object of the child class
hc.getReelTime();
