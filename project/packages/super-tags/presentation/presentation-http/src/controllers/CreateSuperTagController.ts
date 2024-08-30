import { CreateSuperTagParams, CreateSuperTagResult } from "@repo-super-tags/domain"
import { IUseCase } from "@repo-shared/domain"
import { IHttpController,  HttpRequest, HttpResponse } from "@repo-shared/presentation-http"

export class CreateSuperTagController implements IHttpController<CreateSuperTagParams> {
	constructor(private readonly useCase: IUseCase<CreateSuperTagParams, CreateSuperTagResult>) {
	}

	async Handle(req: HttpRequest<CreateSuperTagParams>): Promise<HttpResponse> {
		const res = await this.useCase.Execute({
			userId: req.headers!.user!.id!
		})
		return {
			body: {
				id: res.id
			},
			status: 201
		}
	}

}