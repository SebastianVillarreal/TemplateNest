import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Personas } from './schemas/personas.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class PersonasService {
    constructor(
        @InjectModel(Personas.name)
        private personasModel: mongoose.Model<Personas>
    ){}

    async findAll(): Promise<Personas[]>{
        return await this.personasModel.find();
        
    }

    async createPersonas(personas: Personas): Promise<Personas>{
        const res = this.personasModel.create(personas);
        return res
    }

    getPersonas(){
        const personas = this.findAll()
        return Object.values(personas)
    }
}
