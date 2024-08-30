import {  GetAllUsers } from "@repo-user-management/data";
import {  IGetAllUsers } from "@repo-user-management/domain";
import {  MakeUserRepository } from "../../infra/db/make-user-repository";

export function MakeGetAllUser(): IGetAllUsers {
    return new GetAllUsers(MakeUserRepository())
}