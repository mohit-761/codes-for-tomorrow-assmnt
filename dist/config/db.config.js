"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.getDataSource = void 0;
const typeorm_1 = require("typeorm");
require("./env.config");
const path_1 = require("path");
exports.getDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [(0, path_1.join)(__dirname, '../', 'database/', 'entities', '**', '*.entity.{ts,js}')],
    migrations: [(0, path_1.join)(__dirname, '../', 'database/', 'migrations', '**', '*.ts')],
    migrationsTableName: 'migrations'
});
const connectDatabase = async () => {
    try {
        await exports.getDataSource.initialize();
        console.log(`DATABASE HAS BEEN CONNECTED`);
    }
    catch (error) {
        console.log(`Error while database connection: ${error}`);
    }
};
exports.connectDatabase = connectDatabase;
//# sourceMappingURL=db.config.js.map