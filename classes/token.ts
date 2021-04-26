import jwt from 'jsonwebtoken'
export default class Token {
    //clave unica del token
    private static seed: string = 'este-es-el-seed-de-la-app';
    private static caducida: string = '30d';
    constructor() { }

    static getJwtToken(payload: any): string {
        return jwt.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducida })
    }

    //Comprobar el token que se esta recibiendo
    static comprobarToken(userToken: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(userToken, this.seed, (err, decoded) => {
                if (err) {
                    //no confiar en el token
                    reject();
                } else {
                    //token valido
                    resolve(decoded)
                }
            })
        })

    }
}