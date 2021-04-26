import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
//Creamos el schema de Usuario 
const usuarioSchema = new Schema<IUsuario>({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    }
})

//
usuarioSchema.method('compararPassword', function (password:string=''): boolean {
    if (bcrypt.compareSync(password, this.password)) {
        return true;
    }else{
        return false;
    }
})

//El tipado de datos 
export interface IUsuario extends Document {
    nombre: string,
    avatar: string,
    email: string,
    password: string,
    compararPassword(password: string): boolean;

}
//Creamos una exportacion del schema y el modelo de la siguiente manera:
export const Usuario = model<IUsuario>('Usuario', usuarioSchema);