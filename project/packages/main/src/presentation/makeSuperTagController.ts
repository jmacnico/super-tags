import { CreateSuperTagParams  } from '@repo-super-tags/domain';
import { GetAllSuperTag, GetAllSuperTagParams  } from '@repo-super-tags/data';
import { IHttpController } from '@repo-shared/presentation-http';
import { CreateSuperTagController, GetAllSuperTagController } from '@repo-super-tags/presentation-http'
import { MakeCreateSuperTag } from '../domain/use-cases/make-create-super-tag';
import { makeAuthorizationController } from './makeAuthorizationController';
import { makeSuperTagRepository } from '../infra/db/maker-super-tag-repository';

export function makeCreateSuperTagController(): IHttpController<CreateSuperTagParams> {
	return makeAuthorizationController(
		new CreateSuperTagController(
			MakeCreateSuperTag()
		)
	)
}
export function makeGetAllSuperTagsController(): IHttpController<GetAllSuperTagParams> {
	return makeAuthorizationController(
		new GetAllSuperTagController(
			new GetAllSuperTag(makeSuperTagRepository())
		)
	)
}