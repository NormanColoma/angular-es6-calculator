export class AuthService {
    constructor() {
        this.users = [
            {
                login: 'aparraga@gmail.com',
                pass: 'aparraga2017'
            }, 
            {
                login: 'norman@gmail.com',
                pass: 'norman2017'
            }
        ];

        this.loggedUser = false;
    }

    isLoggedIn(){
        if (this.loggedUser)
            return true;
        return false;
    }
}