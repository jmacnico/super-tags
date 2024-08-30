import { ValidationError } from "@repo-shared/domain";
import { SuperTag, ICreateSuperTag, CreateSuperTagParams, CreateSuperTagResult } from "@repo-super-tags/domain";
import { ISuperTagRepository } from "../services";



export class CreateSuperTag implements ICreateSuperTag {
	constructor(private readonly superTagRepository: ISuperTagRepository) { }

	async Execute(params: CreateSuperTagParams): Promise<CreateSuperTagResult> {
		if (!params.userId) {
			throw new ValidationError("CreateSuperTag", "userId", "USERID_REQUIRED")
		}
		const newSuperTag = SuperTag.New()
		const id = await this.superTagRepository.Add(newSuperTag, params.userId)
		return {
			id
		}
	}
}
