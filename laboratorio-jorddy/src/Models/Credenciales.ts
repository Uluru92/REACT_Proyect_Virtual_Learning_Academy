export class CredencialesEntrada {
    userName: string = "";
    passWord: string = "";

    constructor(pUserName: string, pPassword: string) {
        this.userName = pUserName;
        this.passWord = pPassword;
    }
}

export class CredencialesSalida {
    nombre: string = "";
    correo: string = "";

    constructor(pNombre: string, pCorreo: string) {
        this.nombre = pNombre;
        this.correo = pCorreo;
    }
}