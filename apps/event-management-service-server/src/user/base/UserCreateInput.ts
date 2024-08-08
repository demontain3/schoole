/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { ParticipantProfileCreateNestedManyWithoutUsersInput } from "./ParticipantProfileCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { VolunteerProfileCreateNestedManyWithoutUsersInput } from "./VolunteerProfileCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => ParticipantProfileCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ParticipantProfileCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ParticipantProfileCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  participantProfiles?: ParticipantProfileCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => VolunteerProfileCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => VolunteerProfileCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => VolunteerProfileCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  volunteerProfiles?: VolunteerProfileCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
