interface IPaginatedResponse<T = {}> extends IResponse<T> {
    page?: number;
    pages?: number;

    pageLength?: number;
    collectionLength?: number;
}