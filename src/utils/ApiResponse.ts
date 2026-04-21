export class ApiResponse<T> {
    public statusCode: number;
    public message: string;
    public data: T | null;
    constructor(statusCode: number, message: string, data: any = null){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}