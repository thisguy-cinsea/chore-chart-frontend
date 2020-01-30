export class User {
    userId;
    firstName: String;
    lastName: String;
    email: String;
    userName: String;
    passWord: String;

    constructor(userId, firstName, lastName, email, userName, passWord){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName =lastName;
        this.email = email;
        this.userName = userName;
        this.passWord = passWord;

    }
}