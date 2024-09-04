export interface IHasher {
    Hash(value: string): Promise<string>
    Compare(hashedValue: string, valueTocompare: string): Promise<boolean>
}