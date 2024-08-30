import { IHttpAdapter, IHttpController } from "@repo-shared/presentation-http";


export class NextAdapter<B> implements IHttpAdapter<Request, Response> {
	constructor(private readonly handler: IHttpController<B>) {

	}
	async Execute(req: Request, res?: Response): Promise<Response> {
		try {
			const body = await req.json()
			const HttpRequest = {
				body: body
			}
			const response = await this.handler.Handle(HttpRequest)
			return new Response(JSON.stringify(body), { status: response.status })
		} catch (err: any) {
			return new Response("UNEXPECTED_ERROR", { status: 500 })
		}
	}
}