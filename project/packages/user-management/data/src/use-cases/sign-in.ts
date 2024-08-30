import { ValidationError } from "@repo-shared/domain"
import { IHashComparer, IEncrypter } from "@repo-shared/data"
import {  IGetUserByEmailRepository } from "../services"
import { UserTokenInformation, ISignInUseCase , SignInParams, SignInResult } from "@repo-user-management/domain"

export class SignIn implements ISignInUseCase {
    constructor(
        private readonly getUserByEmailRepository: IGetUserByEmailRepository,
        private readonly hashCompare: IHashComparer,
        private readonly encrypter: IEncrypter<UserTokenInformation>
    ) { }

    async Execute(params: SignInParams): Promise<SignInResult> {
        const user = await this.getUserByEmailRepository.GetByEmail(params.username)
        if (user) {
            const isPasswordValid = await this.hashCompare.Compare(user.passwordHash, params.password)
            if (isPasswordValid) {
                const token = await this.encrypter.Encrypt({
                    id: user.id!,
                    name: user.name
                })

                return {
                    token
                }
            }
        }

        throw new ValidationError("SignIn", null, "INVALID_CREDENTIALS")

    }
}