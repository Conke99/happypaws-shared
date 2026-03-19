import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsString, ValidateNested } from 'class-validator';
import { SetAvailabilityRequest } from '../models/SetAvailabilityRequest';

class AvailabilityItemDto {
  @IsString()
  date!: string;

  @IsBoolean()
  isAvailable!: boolean;
}

export class SetAvailabilityDto implements SetAvailabilityRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AvailabilityItemDto)
  dates!: AvailabilityItemDto[];
}
