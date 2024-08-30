import { CreateUser } from "@repo-user-management/data";
import { ICreateUser } from "@repo-user-management/domain";
import { MakeAddUserRepository, MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
import { MakeHasher } from "../../infra/cryptography/make-hash";

export function MakeCreateUser(): ICreateUser {
    return new CreateUser(MakeAddUserRepository(), MakeGetUserByEmailRepository(), MakeHasher())
}