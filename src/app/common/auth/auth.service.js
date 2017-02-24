export class AuthService {
    constructor() {
        this.users = [
            {
                email: 'aparraga@gmail.com',
                pass: 'aparraga2017'
            }, 
            {
                email: 'norman@gmail.com',
                pass: 'norman2017'
            }
        ];

        this.loggedUser = false;
    }

    login(email, password){
        const userFound = this.findUser(email);
        if (userFound === null) {
            return false;
        }
        if (userFound.pass === password) {
            this.loggedUser = true;
            return true;
        }
            
    }

    isLoggedIn(){
        if (this.loggedUser)
            return true;
        return false;
    }

    existsAccount(email){
       if (this.findUser(email) === null) {
           return false;
       }

       return true;
    }

    findUser(email){
        const usersFound = this.users.filter(user => user.email === email);
        const emailFound = usersFound.length > 0 ? usersFound[0] : null;

        return emailFound
    }
}