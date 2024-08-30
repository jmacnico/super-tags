import { User } from "@repo-user-management/domain"

export interface IAddUserRepository {
    Add(user: User): Promise<void>
}