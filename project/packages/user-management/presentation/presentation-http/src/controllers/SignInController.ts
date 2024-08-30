import { SignInParams, SignInResult,  } from "@repo-user-management/domain"
import { ValidationError, IUseCase  } from "@repo-shared/domain"
import { IHttpController, HttpResponseUtils, HttpRequest, HttpResponse  } from "@repo-shared/presentation-http"

export class SignInController implements IHttpController<SignInParams> {
    constructor(private readonly useCase: IUseCase<SignInParams, SignInResult>) {
    }

    async Handle(req: HttpRequest<SignInParams>): Promise<HttpResponse> {
        try {
            const res = await this.useCase.Execute({
                password: req.body.password,
                username: req.body.username
            })
            return HttpResponseUtils.Ok({
                token: res.token
            })
        } catch (err: any) {
            console.error(err);
            if (err instanceof ValidationError) {
                return HttpResponseUtils.BadRequestError(err.code)
            }
            throw err
        }
    }
}