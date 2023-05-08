export class Portfolio {
    id?: number;
    nombreP: string;
    descripcionP: string;
    imgP: string;
    webP: string;

    constructor(nombreP: string, descripcionP: string, imgP: string, webP: string) {
        this.nombreP=nombreP;
        this.descripcionP=descripcionP;
        this.imgP=imgP;
        this.webP=webP;
    }
}
