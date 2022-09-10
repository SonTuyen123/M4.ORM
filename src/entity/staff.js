"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Staffs = void 0;
var typeorm_1 = require("typeorm");
var Staffs = /** @class */ (function () {
    function Staffs() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Staffs.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Staffs.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Staffs.prototype, "age");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Staffs.prototype, "phone");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Staffs.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Staffs.prototype, "ranks");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Staffs.prototype, "img");
    Staffs = __decorate([
        (0, typeorm_1.Entity)()
    ], Staffs);
    return Staffs;
}());
exports.Staffs = Staffs;
