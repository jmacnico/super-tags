import { IUseCase } from "@repo-shared/domain";
import { SuperTag } from '../models'

export type GetAllSuperTagParams = {
	userId: number
}

export interface IGetAllSuperTag extends IUseCase<GetAllSuperTagParams, SuperTag[]> {

}