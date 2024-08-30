import { JwtAdapter } from "@repo-shared/infra-cryptography";
import { IDecrypter, IEncrypter } from "@repo-shared/data";

function makeJwtAdapter<T extends object>(): JwtAdapter<T> {
    return new JwtAdapter("some_secret")
}

export function MakeEncrypter<T extends object>(): IEncrypter<T> {
    return makeJwtAdapter()
}

export function MakeDecrypter<T extends object>(): IDecrypter<T> {
    return makeJwtAdapter()
}