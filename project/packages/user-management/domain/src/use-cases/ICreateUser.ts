import {IUseCase} from '@repo-shared/domain'

export type CreateUserParams = {
    name: string;
    email: string;
    password: string;
};

export interface ICreateUser extends IUseCase<CreateUserParams, void> {

}