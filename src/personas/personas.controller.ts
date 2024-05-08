import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Personas } from './schemas/personas.schema';

@Controller('personas')
export class PersonasController {
    constructor(private personasService: PersonasService){}

    @Get()
    async getAllPersonas(): Promise<Personas[]>{
        return this.personasService.findAll()
    }

    @Post()
    async createPersonas(
        @Body()
        personas,

    ): Promise<Personas>{
        return this.personasService.createPersonas(personas)
    }
}


