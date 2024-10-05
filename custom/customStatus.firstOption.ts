import { Code } from "../enum/https.enum";

export class ResponseStatudsHTTPS {

    static succes<T>(data: T, message: string = "Succes") {
        return { status: Code.OK, body: { message, data } };
    }
    static cretae<T>(data: T, message: string = "Created") {
        return { status: Code.CREATED, body: { message, data } }
    }
    static notFound(message: string = "Not Found") {
        return { status: Code.NOT_FOUND, body: { message } }
    }
    static conflict(message: string = "Conflict") {
        return { status: Code.CONFLICT, body: { message } }
    }
    static errorServer(message: string = "Internal Error Server") {
        return { status: Code.INTERNAL_SERVER_ERROR, body: { message} }
    }
}
