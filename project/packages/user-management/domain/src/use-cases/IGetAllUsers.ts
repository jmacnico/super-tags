import { IUseCase } from "@repo-shared/domain";
import { User } from "../models"
export interface IGetAllUsers extends IUseCase<void, User[]> {
}