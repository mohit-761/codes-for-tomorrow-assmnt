"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env.config");
const app_1 = __importDefault(require("./app"));
const db_config_1 = require("./config/db.config");
(async () => {
    await (0, db_config_1.connectDatabase)();
    let PORT = process.env.PORT || 3000;
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})();
//# sourceMappingURL=index.js.map