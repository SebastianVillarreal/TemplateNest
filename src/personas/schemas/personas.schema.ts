import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



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
    Sexo:string;

}

export const PersonasSchema = SchemaFactory.createForClass(Personas)