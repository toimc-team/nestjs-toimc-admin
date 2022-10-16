import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @ApiPropertyOptional({
    type: String,
    format: 'email',
    description: 'Email address',
  })
  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional({
    type: String,
    minLength: 6,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name?: string;
}
