import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString, Min, ValidateNested } from 'class-validator';
import { SetPricingRequest } from '../models/SetPricingRequest';

class PricingItemDto {
  @IsString()
  service!: string;

  @IsInt()
  @Min(0)
  priceMin!: number;

  @IsInt()
  @Min(0)
  priceMax!: number;
}

export class SetPricingDto implements SetPricingRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PricingItemDto)
  items!: PricingItemDto[];
}
