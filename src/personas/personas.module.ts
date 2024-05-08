import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonasSchema } from './schemas/personas.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Personas', schema:PersonasSchema}])],
  controllers: [PersonasController],
  providers: [PersonasService]
})
export class PersonasModule {}
