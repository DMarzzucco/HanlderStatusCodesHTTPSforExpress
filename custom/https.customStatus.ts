import { httpsStatusCode } from "../enum/https.enum";

export class ResponseStatudsHTTPS {

    static succes<T>(data: T, message: string = "Succes") {
        return { statusCode: httpsStatusCode.OK, body: { message, data } };
    }
    static cretae<T>(data: T, message: string = "Created") {
        return { statusCode: httpsStatusCode.CREATED, body: { message, data } }
    }
    static notFound(message: string = "Not Found") {
        return { statusCode: httpsStatusCode.NOT_FOUND, body: { message } }
    }
    static conflict(message: string = "Conflict") {
        return { statusCode: httpsStatusCode.CONFLICT, body: { message } }
    }
    static errorServer(message: string, details: string = "Internal Error Server") {
        return { statusCode: httpsStatusCode.INTERNAL_SERVER_ERROR, body: { message, details } }
    }
}
