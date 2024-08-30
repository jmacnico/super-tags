import { User } from "@repo-user-management/domain"
import { ValidationError, IUseCase  } from "@repo-shared/domain"
import { IHttpController, HttpResponseUtils, HttpRequest, HttpResponse  } from "@repo-shared/presentation-http"

export class UserGetAllController implements IHttpController<void> {
	constructor(private readonly useCase: IUseCase<void, User[]>) {
	}

	async Handle(req: HttpRequest<void>): Promise<HttpResponse> {
		try {
			const users = await this.useCase.Execute()
			return HttpResponseUtils.Ok(users)

		} catch (err: any) {
			if (err instanceof ValidationError) {
				return HttpResponseUtils.BadRequestError(err.code)
			}
			throw err
		}
	}
}