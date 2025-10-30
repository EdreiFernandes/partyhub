export class GameModel {
    id: number;
    name: string;
    icon: string;
    brief: string;
    howToPlay: string;
    link: string;

    
    constructor(_id: number, _name: string, _icon: string, _brief: string,  _howToPlay: string, _link: string){
        this.id = _id;
        this.name = _name;
        this.icon = _icon;
        this.brief = _brief;
        this.howToPlay = _howToPlay;
        this.link = _link;
    }
}