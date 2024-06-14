const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
export class Email {
    constructor(public readonly value: string) {
        if (!EMAIL_REGEX.test(value)) {
            throw new Error("INVALID_EMAIL")
        }
    }
}