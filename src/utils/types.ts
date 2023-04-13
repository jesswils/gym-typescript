export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    Classes = "classes",
    ContactUs = "contactus"
}

export interface VinylType {
    artist: string;
    image: JSX.Element;
    title: string;
    description: string;
    price: string,
}