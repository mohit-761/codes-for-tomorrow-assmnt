import './config/env.config';
import app from './app';
import { connectDatabase } from './config/db.config';

(async () => {
        await connectDatabase();
        let PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        })
})();