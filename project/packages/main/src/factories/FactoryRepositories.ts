import { IUserRepository } from "@repo-user-management/data";
import { ISuperTagRepository } from "@repo-super-tags/data";
import {
    //  UserRepositoryInMemory,
    //  UserRepositorySQLite,
     UserRepositoryPostgres  } from "@repo-user-management/infra-db";
import { SuperTagRepositoryPostgres } from "@repo-super-tags/infra-db";

export class FactoryRepositories {    
    
    static makeUserRepository(): IUserRepository {
        // return new UserRepositoryInMemory()
        // return new UserRepositorySQLite()
        return new UserRepositoryPostgres(process.env.DATABASE_URL_POSTGRES!)
    }
    static makeSuperTagRepository(): ISuperTagRepository {
        return new SuperTagRepositoryPostgres()
    }
}