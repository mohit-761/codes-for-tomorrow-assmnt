import { getDataSource } from "../config/db.config";
import { User } from "../database/entities/user.entity";

export class UserService {
    private readonly userRepository = getDataSource.getRepository(User);

    async addBulkUser() {

        let users = [{ name: 'mohit' }, { name: 'rohit' },
        { name: 'anil' }, { name: 'ravi' }, { name: 'shubham' }];

        let userModel: Array<User> = [];

        for (let i in users) {

            let user = new User();

            user.name = users[i].name;

            userModel.push(user);

        };

        console.log('user', userModel);

       return  await this.userRepository.save(userModel);
        
    };

    getData(){
        return {
            data: new Date(),
        }
    }
}