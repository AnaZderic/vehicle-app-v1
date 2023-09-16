interface IPartialMake {
    name: string;
    abrv: string;
    img: string;
}

interface IPartialModel extends IPartialMake {
    makeId: string;
}
