import { IDecrypter, IUserRepository, UserTokenInformation } from "@repo/domain"
import { IApiController } from "../protocols/IApiController"
import { HttpResponse } from "../models/HttpResponse"
import { HttpRequest } from "../models/HttpRequest"
import { HttpResponseUtils } from "../utils/HttpResponseUtils"



export class AuthorizationController<B> implements IApiController<B> {
    constructor(
        private readonly next: IApiController<B>,
        private readonly userRepository: IUserRepository,
        private readonly jwtDecoder: IDecrypter<UserTokenInformation>,

    ) {

    }

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