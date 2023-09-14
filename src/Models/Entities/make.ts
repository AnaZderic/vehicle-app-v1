class MakeModel
{
    id?: string;
    name: string;
    abrv: string;
    img: string;

    constructor(name: string, abrv: string, img: string, id?: string) {
        this.id = id;
        this.name = name;
        this.abrv = abrv;
        this.img = img;
    }
}

export default MakeModel;