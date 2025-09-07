export class GameModel {
    id: number;
    name: string;
    howToPlay: string;
    link: string;

    
    constructor(_id: number, _name: string, _howToPlay: string, _link: string){
        this.id = _id;
        this.name = _name;
        this.howToPlay = _howToPlay;
        this.link = _link;
    }
}