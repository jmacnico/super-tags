import { MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
import { MakeHashComparer } from "../../infra/cryptography/make-hash";
import { ISignInUseCase } from "@repo-user-management/domain";
import { SignIn } from "@repo-user-management/data";
import { MakeEncrypter } from "../../infra/cryptography/make-encrypter";

export function MakeSignIn(): ISignInUseCase {
	return new SignIn(MakeGetUserByEmailRepository(), MakeHashComparer(), MakeEncrypter())
}