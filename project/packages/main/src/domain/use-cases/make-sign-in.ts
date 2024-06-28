import { MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
import { MakeHashComparer } from "../../infra/cryptography/make-hash";
import { SignIn } from "@repo/domain";

export function MakeSignIn(): SignIn {
    return new SignIn(MakeGetUserByEmailRepository(), MakeHashComparer())
}