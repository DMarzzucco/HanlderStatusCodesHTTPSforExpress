

# Hanlder Status Codes HTTPS for Express

This module provides a class to handle HTTP responses for Express, using standard status codes. The ResponseStatusHTTPS class makes it easy to create consistent and structured responses for different situations in a web application.

## Examples

```TS

 async getByid(id: number): Promise<ServiceResponse<users>> {
        try {
            const user = await prisma.users.findUnique({ where: { id: id } })
            if (!user) {
                return ResponseStatudsHTTPS.notFound()
            }
            return ResponseStatudsHTTPS.succes(user)
        } catch (error: any) {
            return ResponseStatudsHTTPS.errorServer(error.message)
        }
    }

 ```

 ## Interface 

```TS

interface ServiceResponse<T> {
    statusCode: httpsStatusCode; //Export Enums
    body: {
        message: string;
        data?: T;
        details?: string;
    }
}

```

## Author

Made by Dario Marzzucco (@darmarzz)
