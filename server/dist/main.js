/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/prodController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/prodController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var prodModel_1 = __importDefault(__webpack_require__(/*! ../models/prodModel */ "./src/models/prodModel.ts"));
var getAllProd = function (req, res) {
    prodModel_1.default.find({}, function (err, product) {
        res.header("Access-Control-Allow-Origin", "*"); //CORS
        res.json(product);
    });
};
exports.default = getAllProd;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
var dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
var mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
var mainRoutes_1 = __importDefault(__webpack_require__(/*! ./routes/mainRoutes */ "./src/routes/mainRoutes.ts"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
dotenv_1.default.config({ path: "./.env" });
mainRoutes_1.default(app);
app.get("/api", function (req, res) {
    res.send("Welcome to NodeJs App using TypeScript");
});
var uri = process.env.DATABASE;
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(function (err) {
    console.log("conectado no MarcosDB hereee");
});
var PORT = parseInt(process.env.PORT, 10) || 5000;
app.listen(PORT, function () {
    console.log("consolando a porta " + PORT);
});


/***/ }),

/***/ "./src/models/prodModel.ts":
/*!*********************************!*\
  !*** ./src/models/prodModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var ProdSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
var product = mongoose_1.model("product", ProdSchema);
exports.default = product;


/***/ }),

/***/ "./src/routes/mainRoutes.ts":
/*!**********************************!*\
  !*** ./src/routes/mainRoutes.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var prodController_1 = __importDefault(__webpack_require__(/*! ../controllers/prodController */ "./src/controllers/prodController.ts"));
var routes = function (app) {
    //CV-EDU
    app.route("/api/products").get(prodController_1.default);
    // app.route("/api/products/:prodId").get(getEdu);
};
exports.default = routes;


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;