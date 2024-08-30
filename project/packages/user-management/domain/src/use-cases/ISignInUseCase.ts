import {IUseCase} from '@repo-shared/domain'

export type SignInParams = {
    username: string,
    password: string
}

export type SignInResult = {
    token: string
}

export interface ISignInUseCase extends IUseCase<SignInParams, SignInResult> {}