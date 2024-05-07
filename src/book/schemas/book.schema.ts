import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE='Adventure',
}

@Schema({
    timestamps:true,
})

export class Book{
    @Prop()
    title: string;
    @Prop()
    description:string;
    @Prop()
    author:string;
    @Prop()
    category:Category;

}

export const BookSchema = SchemaFactory.createForClass(Book)