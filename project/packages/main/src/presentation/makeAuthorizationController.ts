import { AuthorizationController } from '@repo-user-management/presentation-http'
import { IHttpController } from '@repo-shared/presentation-http'
import { MakeUserRepository } from '../infra/db/make-user-repository';
import { MakeDecrypter } from '../infra/cryptography/make-encrypter';

export function makeAuthorizationController<T>(controller: IHttpController<T>): IHttpController<T> {
	return new AuthorizationController<T>(
		controller,
		MakeUserRepository(),
		MakeDecrypter()
	)
}
