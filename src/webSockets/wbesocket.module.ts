import { Module } from "@nestjs/common";
import { WebsocketGateWay } from "./websocket.gateway";
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchema } from "src/book/schemas/book.schema";
import { BookService } from "src/book/book.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Book', schema:BookSchema}])],
    providers:[WebsocketGateWay, BookService]
})
export class GateWayModule{}