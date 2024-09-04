import { IHttpController } from "@repo-shared/presentation-http";
import { AuthorizationController, SignInController, UserGetAllController, UserRegisterController } from "@repo-user-management/presentation-http";
import { FactoryRepositories } from "./FactoryRepositories";
import { FactoryServices } from "./FactoryServices";
import { CreateSuperTagParams, GetAllSuperTagParams } from "@repo-super-tags/domain";
import { CreateSuperTagController, GetAllSuperTagController } from "@repo-super-tags/presentation-http";
import { FactoryUseCases } from "./FactoryUseCases";
import { CreateUserParams, SignInParams } from "@repo-user-management/domain";

export class FactoryControllers {
	static makeAuthorizationController<T>(controller: IHttpController<T>): IHttpController<T> {
		return new AuthorizationController<T>(
			controller,
			FactoryRepositories.makeUserRepository(),
			FactoryServices.makeEncrypter()
		)
	}

	static makeSignInController(): IHttpController<SignInParams> {
		return new SignInController(
			FactoryUseCases.makeSignIn()
		)
	}

	static makeUserRegisterController(): IHttpController<CreateUserParams> {
		return new UserRegisterController(
			FactoryUseCases.makeCreateUser()
		)
	}
	static makeGetAllUsersController(): IHttpController<void> {
		return FactoryControllers.makeAuthorizationController(
			new UserGetAllController(
				FactoryUseCases.makeGetAllUser()
			)
		)
	}


	static makeCreateSuperTagController(): IHttpController<CreateSuperTagParams> {
		return FactoryControllers.makeAuthorizationController(
			new CreateSuperTagController(
				FactoryUseCases.makeCreateSuperTagController()
			)
		)
	}
	static makeGetAllSuperTagsController(): IHttpController<GetAllSuperTagParams> {
		return FactoryControllers.makeAuthorizationController(
			new GetAllSuperTagController(
				FactoryUseCases.makeGetAllSuperTag()
			)
		)
	}
}