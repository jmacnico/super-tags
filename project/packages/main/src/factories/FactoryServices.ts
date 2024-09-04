import { IEncrypter, IHasher } from "@repo-shared/data";
import { BcryptAdapter, JwtAdapter } from "@repo-shared/infra-cryptography";

export class FactoryServices {    
    
    static makeEncrypter<T extends object>(): IEncrypter<T> {
        return new JwtAdapter("some_secret")
    }
    static makeHasher(): IHasher {
        return new BcryptAdapter(12)
    }
}