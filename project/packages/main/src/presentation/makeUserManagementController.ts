import { CreateUserParams, SignInParams } from '@repo-user-management/domain';
import { SignInController, UserGetAllController, UserRegisterController } from '@repo-user-management/presentation-http'
import { IHttpController} from '@repo-shared/presentation-http'
import { MakeSignIn } from '../domain/use-cases/make-sign-in';
import { MakeCreateUser } from '../domain/use-cases/make-create-user';
import { MakeGetAllUser } from '../domain/use-cases/make-get-all-user';
import { makeAuthorizationController } from './makeAuthorizationController';

export function makeSignInController(): IHttpController<SignInParams> {
    return new SignInController(
        MakeSignIn()
    )
}

export function makeUserRegisterController(): IHttpController<CreateUserParams> {
    return new UserRegisterController(
        MakeCreateUser()
    )
}
export function makeGetAllUsersController(): IHttpController<void> {
    return makeAuthorizationController(new UserGetAllController(
        MakeGetAllUser())
    )
}
