class SearchParamsModel {
    query: string;
    page: string;

    constructor(query: string, page: string) {
        this.query = query;
        this.page = page;
    }
}

export default SearchParamsModel;