import { IUseCase } from "@repo-shared/domain";

export type CreateSuperTagResult = {
	id: number
}
export type CreateSuperTagParams = {
	userId: number
}

export interface ICreateSuperTag extends IUseCase<CreateSuperTagParams, CreateSuperTagResult> {

}