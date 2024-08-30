import {
    IAddUserRepository,
    IGetUserByEmailRepository,
} from "../services";

import {IHasher} from '@repo-shared/data'

import { ICreateUser, User, PasswordStrong, CreateUserParams } from '@repo-user-management/domain'
import { ValidationError } from "@repo-shared/domain";



export class CreateUser implements ICreateUser {
    constructor(
        private readonly addUserRepository: IAddUserRepository,
        private readonly getUserByEmail: IGetUserByEmailRepository,
        private readonly hasher: IHasher
    ) { }

    async Execute(params: CreateUserParams): Promise<void> {
        new PasswordStrong(params.password);
        const foundUser = await this.getUserByEmail.GetByEmail(params.email);
        if (foundUser) {
            throw new ValidationError("CreateUser", null, "USER_ALREADY_EXISTS");
        }
        const hashedPassword = await this.hasher.Hash(params.password);
        const newUser = new User(null, params.name, params.email, hashedPassword);
        await this.addUserRepository.Add(newUser);
    }
}
