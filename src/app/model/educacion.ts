export class Educacion {
    id? : number;
    nombreEd : string;
    descripcionEd : string;
    periodoEd : string;
    ubicacionEd : string;
    webEd: string;

    constructor(nombreEd: string, descripcionEd: string, periodoEd: string, ubicacionEd: string, webEd: string) {
        this.nombreEd = nombreEd;
        this.descripcionEd = descripcionEd;
        this.periodoEd = periodoEd;
        this.ubicacionEd = ubicacionEd;
        this.webEd = webEd;

    }
}
