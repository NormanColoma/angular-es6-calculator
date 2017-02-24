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
        const usersFound = this.users.filter(user => user.email === email);
        const userFound = usersFound.length > 0 ? usersFound[0] : null;
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
}