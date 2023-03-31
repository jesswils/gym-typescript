export enum SelectedPage {
    Home = "home",
    Vinyl = "vinyl",
    Merch = "merch",
    Help = "help"
}

export interface VinylType {
    artist: string;
    image: JSX.Element,
    title: string;
    description: string;
    price: string,
}