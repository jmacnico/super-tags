import { CreateUser, GetAllUsers, SignIn } from "@repo-user-management/data";
import { ICreateUser, IGetAllUsers, ISignInUseCase } from "@repo-user-management/domain";
import { FactoryRepositories } from "./FactoryRepositories";
import { FactoryServices } from "./FactoryServices";
import { ICreateSuperTag, IGetAllSuperTag } from "@repo-super-tags/domain";
import { CreateSuperTag, GetAllSuperTag } from "@repo-super-tags/data";
// import { MakeAddUserRepository, MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
// import { MakeHasher } from "../../infra/cryptography/make-hash";

export class FactoryUseCases {
    static makeCreateUser(): ICreateUser {
        return new CreateUser(FactoryRepositories.makeUserRepository(),FactoryServices.makeHasher())
    }

    static makeGetAllUser(): IGetAllUsers {
        return new GetAllUsers(FactoryRepositories.makeUserRepository())
    }

   static makeSignIn(): ISignInUseCase {
        return new SignIn(FactoryRepositories.makeUserRepository(), FactoryServices.makeHasher(), FactoryServices.makeEncrypter())
    }

	static makeGetAllSuperTag(): IGetAllSuperTag {
		return new GetAllSuperTag(FactoryRepositories.makeSuperTagRepository())
	}
	static makeCreateSuperTagController(): ICreateSuperTag {
		return new CreateSuperTag(FactoryRepositories.makeSuperTagRepository())
	}
}