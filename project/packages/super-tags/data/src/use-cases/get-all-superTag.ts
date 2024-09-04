import { SuperTag, IGetAllSuperTag, GetAllSuperTagParams } from "@repo-super-tags/domain";
import { ISuperTagRepository } from "../services";


export class GetAllSuperTag implements IGetAllSuperTag {
	constructor(private readonly superTagRepository: ISuperTagRepository) { }

	async Execute(params: GetAllSuperTagParams): Promise<SuperTag[]> {
		return await this.superTagRepository.GetAll(params.userId)
	}
}
