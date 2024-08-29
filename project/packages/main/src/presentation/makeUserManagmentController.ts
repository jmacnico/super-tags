import { CreateUserParams, SignInParams } from '@repo/domain';
import { IApiController, SignInController, UserGetAllController, UserRegisterController } from '@repo/presentation-api'
import { MakeSignIn } from '../domain/use-cases/make-sign-in';
import { MakeCreateUser } from '../domain/use-cases/make-create-user';
import { MakeGetAllUser } from '../domain/use-cases/make-get-all-user';
import { makeAuthorizationController } from './makeAuthorizationController';

export function makeSignInController(): IApiController<SignInParams> {
    return new SignInController(
        MakeSignIn()
    )
}

export function makeUserRegisterController(): IApiController<CreateUserParams> {
    return new UserRegisterController(
        MakeCreateUser()
    )
}
export function makeGetAllUsersController(): IApiController<void> {
    return makeAuthorizationController(new UserGetAllController(
        MakeGetAllUser())
    )
}
