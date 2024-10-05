import { Code } from "../enum/https.enum";

export interface ServiceResponse<T> {
    status: Code;
    body: {
        message?: string;
        data?: T;
    }
}

export interface StatusRes<T> {
    status: Code;
    message?: string;
    data?: T;
}
