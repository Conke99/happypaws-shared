import type { CreatePetDto } from './create-pet.dto';

export type UpdatePetDto = Partial<CreatePetDto>;
