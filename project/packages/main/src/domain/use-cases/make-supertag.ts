import { CreateSuperTag } from "@repo-super-tags/data";
import { ICreateSuperTag } from "@repo-super-tags/domain";
import { MakeSuperTagRepository } from "../../infra/db/make-supertag-repository";

export function MakeSuperTag(): ICreateSuperTag {
  return new CreateSuperTag(MakeSuperTagRepository());
}
