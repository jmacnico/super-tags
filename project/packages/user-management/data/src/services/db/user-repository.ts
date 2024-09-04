import { User } from "@repo-user-management/domain"

export interface IUserRepository {
    Add(user: User): Promise<void>
    GetByEmail(email:string): Promise<User | undefined>
    GetAll(): Promise<User[]>
    ClearAll(): Promise<void>
    GetById(id: number): Promise<User | null>

}