class ModelModel
{
    id: string;
    makeId: string;
    name: string;
    abrv: string;

    constructor(id: string, makeId: string, name: string, abrv: string)
    {
        this.id = id;
        this.makeId = makeId;
        this.name = name;
        this.abrv = abrv;
    }
}

export default ModelModel;