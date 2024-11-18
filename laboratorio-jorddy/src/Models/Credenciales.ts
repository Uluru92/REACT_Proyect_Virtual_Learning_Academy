export class Credenciales{
    userName: string = "";
    passWord: string = "";

    constructor(pUserName: string, pPassword: string)
    {
        this.userName = pUserName;
        this.passWord = pPassword;
    }
}