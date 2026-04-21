"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1776773296110 = void 0;
const typeorm_1 = require("typeorm");
class User1776773296110 {
    table = 'user';
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.table,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP'
                }
            ]
        }));
    }
    async down(queryRunner) {
        let table = await queryRunner.getTable(this.table);
        if (!table)
            return;
        await queryRunner.dropTable(table);
    }
}
exports.User1776773296110 = User1776773296110;
//# sourceMappingURL=1776773296110-user.js.map