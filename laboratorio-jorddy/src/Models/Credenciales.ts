export class CredencialesEntrada {
    userName: string = "";
    passWord: string = "";

    constructor(pUserName: string, pPassword: string) {
        this.userName = pUserName;
        this.passWord = pPassword;
    }
}

export class CredencialesSalida {

    detalle: RespuestaGeneralApi;
    nombre: string = "";
    correo: string = "";

    constructor(pNombre: string, pCorreo: string, detalle: RespuestaGeneralApi = new RespuestaGeneralApi())
    {
        this.nombre = pNombre;
        this.correo = pCorreo;
        this.detalle = detalle;
    }
}

export class RespuestaGeneralApi
{
    Codigo: string = ""
    Descripcion: string = ""
}