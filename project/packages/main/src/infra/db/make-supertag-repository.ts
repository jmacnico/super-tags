import { ISuperTagRepository } from "@repo-super-tags/data";
import { SuperTagRepositoryPostgres } from "@repo-super-tags/infra";

function MakeSuperTagRepositoryPostgres(): SuperTagRepositoryPostgres {
  return new SuperTagRepositoryPostgres();
}

export function MakeSuperTagRepository(): ISuperTagRepository {
  return MakeSuperTagRepositoryPostgres();
}
