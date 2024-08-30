import { User } from "@repo-user-management/domain"

export interface IGetUserByEmailRepository {
    GetByEmail(email: string): Promise<User | undefined>
}
