import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { ServiceType } from '../../Services/services';
import { CreateBookingRequest } from '../models/CreateBookingRequest';

export class CreateBookingDto implements CreateBookingRequest {
  @IsString()
  sitterId: string;

  @IsString({ each: true })
  petIds: string[];

  @IsEnum(ServiceType)
  serviceType: ServiceType;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsNumber()
  totalPrice: number;

  @IsString()
  @IsOptional()
  notes?: string | null;

  constructor(partial?: Partial<CreateBookingRequest>) {
    Object.assign(this, partial);
  }
}
