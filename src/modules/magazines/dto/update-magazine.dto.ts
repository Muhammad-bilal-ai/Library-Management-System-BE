import { PartialType } from '@nestjs/swagger';
import { CreateMagazineDto } from './create-magazine.dto';

export class UpdateMagazineDto extends PartialType(CreateMagazineDto) {
  // updated_by_userId: string;
}
