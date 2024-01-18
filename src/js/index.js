"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const elements_1 = require("./elements");
const logic_1 = require("./logic");
(_a = elements_1.uiElements.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', logic_1.formHandler);
(_b = elements_1.uiElements.restart) === null || _b === void 0 ? void 0 : _b.addEventListener('click', logic_1.restartHandler);
//# sourceMappingURL=index.js.map