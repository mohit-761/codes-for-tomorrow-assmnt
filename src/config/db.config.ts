import { DataSource } from 'typeorm';
import './env.config';
import { join } from 'path';

export const getDataSource: DataSource = new DataSource({
    type: 'mysql',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [join(__dirname, '../', 'database/', 'entities', '**', '*.entity.{ts,js}')],
    migrations: [join(__dirname, '../', 'database/', 'migrations', '**', '*.ts')],
    migrationsTableName: 'migrations'
});

export const connectDatabase = async () => {
    try{
        await getDataSource.initialize();
        console.log(`DATABASE HAS BEEN CONNECTED`);
    }catch(error){
        console.log(`Error while database connection: ${error}`)
    }
}
