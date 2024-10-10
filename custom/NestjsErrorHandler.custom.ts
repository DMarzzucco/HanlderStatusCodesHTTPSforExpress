import {HttpException, HttpStatus} from "@nestjs/common";

export interface httpProps {
    type: keyof typeof HttpStatus;
    message: string;
}
export class ErrorManager extends Error {

    constructor({ type, message }: httpProps) { super(`${type} : ${message}`) }

    public static createSignatureError(message: string): void {
        const name = message.split(" : ")[0] as keyof typeof HttpStatus;
        if (HttpStatus[name]) {
            throw new HttpException(message, HttpStatus[name])
        }
        throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}
