import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE='Adventure',
}

@Schema({
    timestamps:true,
})

export class Personas{
    @Prop()
    Nombre: string;
    @Prop()
    ApellidoPaterno:string;
    @Prop()
    ApellidoMaterno:string;
    @Prop()
    Sexo:Category;

}

export const PersonasSchema = SchemaFactory.createForClass(Personas)