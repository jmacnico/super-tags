import { User } from "@repo-user-management/domain"
import { IAddUserRepository, IGetUserByEmailRepository, IUserRepository } from "@repo-user-management/data"
import { PrismaClientPostgres } from "@repo-database/postgres";

export class UserRepositoryPostgres implements IUserRepository, IAddUserRepository, IGetUserByEmailRepository {
	_db: PrismaClientPostgres
	constructor(connectionString: string) {
		this._db = new PrismaClientPostgres({
			datasources: {
				db: {
					url: connectionString,
				},
			}
		})
	}
	async GetById(id: number): Promise<User | null> {
		const user = await this._db.user.findFirst({
			where: {
				id
			}
		})
		return user ? new User(user.id, user.name, user.email, user.password) : null
	}

	async GetAll(): Promise<User[]> {
		const users = await this._db.user.findMany()
		return users.map(u => new User(u.id, u.name, u.email, u.password))
	}

	async Add(user: User): Promise<void> {
		await this._db.user.create({
			data: {
				name: user.name,
				email: user.email.value,
				password: user.passwordHash,
			}
		})
	}

	async ClearAll(): Promise<void> {
		await this._db.user.deleteMany()
	}

	async GetByEmail(email: string): Promise<User | undefined> {
		const user = await this._db.user.findFirst({
			where: {
				email
			}
		})
		return user ? new User(user.id, user.name, user.email, user.password) : undefined
	}
}