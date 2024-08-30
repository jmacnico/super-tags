import { CreateUserParams } from "@repo-user-management/domain"
import { ValidationError, IUseCase  } from "@repo-shared/domain"
import { IHttpController, HttpResponseUtils, HttpRequest, HttpResponse  } from "@repo-shared/presentation-http"

export class UserRegisterController implements IHttpController<CreateUserParams> {
	constructor(private readonly useCase: IUseCase<CreateUserParams, void>) {
	}

	async Handle(req: HttpRequest<CreateUserParams>): Promise<HttpResponse> {
		try {
			await this.useCase.Execute({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			})
			return HttpResponseUtils.Created()

		} catch (err: any) {
			if (err instanceof ValidationError) {
				return HttpResponseUtils.BadRequestError(err.code)
			}
			throw err
		}
	}
}