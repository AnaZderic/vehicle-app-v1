interface IResponse<T = {}>
{
    result?: T;
    errors?: string[];
    success: boolean;
}


