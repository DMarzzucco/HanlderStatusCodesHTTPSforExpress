

# Hanlder Status Codes HTTPS for Express

This module provides a class to handle HTTP responses for Express, using standard status codes. The ResponseStatusHTTPS class makes it easy to create consistent and structured responses for different situations in a web application.

## Objective

The main goal of this module is to provide a standardized and consistent way to manage HTTP responses in an application. The implementation of this class is guided by SOLID principles and design parameters to:

- **Keep code clean:** Providing clear and specific methods for each type of response, avoiding code duplication and promoting reuse.

- **Ensure scalability:** Allowing easy addition of new types of responses or modification of existing ones without affecting other parts of the system.

- **Ensure high quality:** Applying design principles that improve the readability and maintainability of the code.

## Examples in Service 

### First Option

```TS
 
 async getByid(id: number): Promise<ServiceResponse<users>> {
        try {
            const user = await prisma.users.findUnique({ where: { id: id } })
            if (!user) {
                return ResponseStatudsHTTPS.notFound(`User not found`)
            }
            return ResponseStatudsHTTPS.succes(user)
        } catch (error: any) {
            return ResponseStatudsHTTPS.errorServer(error.message)
        }
    }

 ```
 ### Second Option

  ```TS
 
 async getByid(id: number): Promise<ServiceResponse<users>> {
        try {
            const user = await prisma.users.findUnique({ where: { id: id } })
            if (!user) {
                return ResponseStatudsHTTPS.createResponse({status:Code.NOT_FOUND, message:"User not found"})
            }
            return ResponseStatudsHTTPS.createResponse({status:Code.OK, data:user})
        } catch (error: any) {
            return ResponseStatudsHTTPS.createResponse({status:Code.INTERNAL_SERVER_ERROR, message: error.message})
        }
    }

 ```

 ## Examples in Controllers 

```TS
  public async getByid(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.service.getByid(Number(id))
        return res.status(result.statusCode).json(result.body)
    }
 ```

 ## Interface 

```TS

interface ServiceResponse<T> {
    statusCode: httpsStatusCode; //Export Enums
    body: {
        message?: string;
        data?: T;
    }
}

```

## Handler Error for NestJs

 ```TS
 public async getByid(id: number): Promise<User> {
        try {
            const user = await prisma.users.findUnique({ where: { id: id } })
            if (!user) {
                throw new ErrorManager({ type: "NOT_FOUND", message: "User not found" })
            }
            return user
        } catch (error: any) {
            throw new ErrorManager.createSignatureError(error.message)
        }
    }
 ```

## Author

Made by Dario Marzzucco (@darmarzz)
