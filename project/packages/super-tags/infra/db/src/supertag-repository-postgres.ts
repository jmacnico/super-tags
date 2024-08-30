import { PrismaClientPostgres } from "@repo-database/postgres";
import { NomeSimples } from "@repo-shared/domain";
import { ISuperTagRepository } from "@repo-super-tags/data";
import { IconEnum, SuperTag, PropriedadeValor, Propriedade } from "@repo-super-tags/domain";

export class SuperTagRepositoryPostgres implements ISuperTagRepository {
    _db: PrismaClientPostgres
    constructor() {
        this._db = new PrismaClientPostgres();
    }
    Edit(supertag: SuperTag): Promise<void> {
        throw new Error("Method not implemented.");
    }
    ClearAll(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    GetByUserId(): Promise<SuperTag[] | undefined> {
        throw new Error("Method not implemented.");
    }
    GetById(id: number): Promise<SuperTag | undefined> {
        throw new Error("Method not implemented.");
    }
    GetByTitulo(titulo: string): Promise<SuperTag | undefined> {
        throw new Error("Method not implemented.");
    }
    async GetAll(userId: number): Promise<SuperTag[]> {
        const superTags = await this._db.superTag.findMany({
            where: {
                userId: userId
            },
            include: {
                propriedade: true,
            },
        })
        return superTags.map(s =>
            new SuperTag(
                s.id,
                IconEnum[s.icon as keyof typeof IconEnum],
                s.titulo,
                s.conteudo,
                s.propriedade.map(p =>
                    new Propriedade(
                        p.id,
                        new NomeSimples(p.chave),
                        new PropriedadeValor(p.tipo, p.valor)
                    )
                )
            )
        )
    }

    async Add(superTag: SuperTag, userId: number): Promise<number> {
        const createdTag = await this._db.superTag.create({
            data: {
                titulo: superTag.titulo,
                conteudo: superTag.conteudo,
                icon: superTag.icon,
                userId: userId
            },
        });
        return createdTag.id
    }
}
