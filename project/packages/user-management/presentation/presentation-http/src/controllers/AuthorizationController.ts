import { UserTokenInformation } from "@repo-user-management/domain"
import { IUserRepository } from "@repo-user-management/data"
import { IEncrypter } from "@repo-shared/data"
import { IHttpController, HttpResponse, HttpRequest, HttpResponseUtils } from "@repo-shared/presentation-http"



export class AuthorizationController<B> implements IHttpController<B> {
    constructor(
        private readonly next: IHttpController<B>,
        private readonly userRepository: IUserRepository,
        private readonly jwtDecoder: IEncrypter<UserTokenInformation>,

    ) {  }

    async Handle(req: HttpRequest<B>): Promise<HttpResponse> {
        if (!req.headers?.token) {
            return HttpResponseUtils.Unauthorized()
        }
        let jwtUserInfo
        try {
            jwtUserInfo = await this.jwtDecoder.Decrypt(req.headers.token)

        } catch (err: any) {
            if (err.message === "jwt malformed")
                return HttpResponseUtils.Unauthorized()
            throw err
        }
        if (!jwtUserInfo)
            return HttpResponseUtils.Unauthorized()
        const user = await this.userRepository.GetById(jwtUserInfo.id)
        if (!user) {
            return HttpResponseUtils.Unauthorized()
        }
        const newReq: HttpRequest<B> = {
            ...req,
            headers: {
                ...req.headers,
                user: {
                    id: user.id!,
                    email: user.email.value,
                    name: user.name,
                }
            }
        }
        return this.next.Handle(newReq)
    }

}