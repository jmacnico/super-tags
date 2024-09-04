import { IGetAllSuperTag, GetAllSuperTagParams } from "@repo-super-tags/domain"
import { IHttpController, HttpRequest, HttpResponse } from "@repo-shared/presentation-http"

export class GetAllSuperTagController implements IHttpController<GetAllSuperTagParams> {
	constructor(private readonly useCase: IGetAllSuperTag) {
	}

	async Handle(req: HttpRequest<GetAllSuperTagParams>): Promise<HttpResponse> {
		const res = await this.useCase.Execute({
			userId: req.headers!.user!.id!
		})
		return {
			body: res,
			status: 201
		}
	}

}