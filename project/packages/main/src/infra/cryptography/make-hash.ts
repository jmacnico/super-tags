import { BcryptAdapter } from "@repo-shared/infra-cryptography";
import { IHashComparer, IHasher } from "@repo-shared/data";

function makeBcrypt(): BcryptAdapter {
    return new BcryptAdapter(12)
}

export function MakeHasher(): IHasher {
    return makeBcrypt()
}

export function MakeHashComparer(): IHashComparer {
    return makeBcrypt()
}