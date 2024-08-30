import { ICreateSuperTag } from "@repo-super-tags/domain";
import { CreateSuperTag } from "@repo-super-tags/data";
import { makeSuperTagRepository } from "../../infra/db/maker-super-tag-repository";

export function MakeCreateSuperTag(): ICreateSuperTag {
    return new CreateSuperTag(makeSuperTagRepository())

}