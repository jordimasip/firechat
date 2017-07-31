import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from "../interfaces/mensaje.interface";

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  usuario:any = {
    nombre:"Juan Carlos"
  };

  constructor(private af: AngularFireDatabase) {
  }

  cargarMensajes() {
    this.chats = this.af.list('/chats', {
      query: {
        limitToLast: 20,
        orderByKey: true
      }
    });

    return this.chats;
  }

  agregarMensaje(texto: string) {

    let mensaje:Mensaje = {
      nombre:"Juan Carlos",
      mensaje: texto
    }

    return this.chats.push(mensaje);

  }

}
