import { User } from "@repo-user-management/domain";
import {
	IUserRepository,
} from "../services";

export class GetAllUsers implements GetAllUsers {
	constructor(
		private readonly userRepository: IUserRepository,
	) { }

	async Execute(): Promise<User[]> {
		return await this.userRepository.GetAll()
	}
}
