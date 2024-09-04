import { IEncrypter } from '@repo-shared/data'

import jwt from 'jsonwebtoken'

export class JwtAdapter<T extends object> implements IEncrypter<T> {
    constructor(private readonly secret: string) { }

    async Encrypt(value: T): Promise<string> {
        return jwt.sign(value, this.secret)
    }

    async Decrypt(ciphertext: string): Promise<T> {
        return jwt.verify(ciphertext, this.secret) as T
    }
}
