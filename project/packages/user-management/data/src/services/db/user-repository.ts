import { User } from "@repo-user-management/domain"

export interface IUserRepository {
    GetAll(): Promise<User[]>
    ClearAll(): Promise<void>
    GetById(id: number): Promise<User | null>

}