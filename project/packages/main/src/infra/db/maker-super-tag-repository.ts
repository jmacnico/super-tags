import { ISuperTagRepository } from "@repo-super-tags/data";
import { SuperTagRepositoryPostgres } from "@repo-super-tags/infra-db";


export function makeSuperTagRepository(): ISuperTagRepository {
	return new SuperTagRepositoryPostgres();
}

