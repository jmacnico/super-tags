export interface IHttpAdapter<Req, Res> {
	Execute(req: Req, resp: Res): Promise<Res>
}