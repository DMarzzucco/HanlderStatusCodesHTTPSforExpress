import { ServiceResponse, StatusRes } from "../interfaces/ServiceResponse.interface"

export class ResponseStatusHTTPS {
	static createResponse<T>({ status, message, data }: StatusRes<T>): ServiceResponse<T> {
		return {
			status,
			body: {
				message,
				data
			}
		}
	}
}
