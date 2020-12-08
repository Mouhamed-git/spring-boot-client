import { Album } from './Album';

export class Comic {
    id: number;
    title: String;
    scriptWriter: number;
    illustrator: String;
    publisher: number;
    favorite: boolean;
    albums: Album;
}