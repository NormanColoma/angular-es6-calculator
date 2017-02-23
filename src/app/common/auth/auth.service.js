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
        const userFound = this.users.filter(user => user.email === email)[0];
        if(userFound.pass === password) {
            this.loggedUser = true;
            return true;
        }
        return false;
            
    }

    isLoggedIn(){
        if (this.loggedUser)
            return true;
        return false;
    }
}