import { InjectModel } from "@nestjs/mongoose";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from "@nestjs/websockets";
import { Observable, from, map } from "rxjs";
import {Server, Socket} from 'socket.io'
import { BookService } from "src/book/book.service";
import { Book } from "src/book/schemas/book.schema";


@WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
export class WebsocketGateWay implements OnGatewayConnection, OnGatewayDisconnect{
    
    @WebSocketServer()
    server: Server;


    constructor(private readonly bookService: BookService){}
    handleConnection(client: Socket) {
        console.log('Cliente conectado');

    }

    handleDisconnect(client: any) {
        console.log( 'Cliente desconectado')
    }

    @SubscribeMessage('mensaje')
    handleMessage( @ConnectedSocket() client:Socket,  @MessageBody() data:Book ): Observable<WsResponse<Book[]>> {
        const event = 'mensaje';
        console.log('Mensaje');
        this.bookService.createBook(data);
        const response = this.bookService.findAll();

        return from(response).pipe(
            map(data => ({ event, data })),
        );
    }

    @SubscribeMessage('events')
    onEvent(@MessageBody() data: unknown): Observable<WsResponse<Book[]>> {
    const event = 'events';
    const response = this.bookService.findAll();

    
    return from(response).pipe(
        map(data => ({ event, data })),
    );
    }


}