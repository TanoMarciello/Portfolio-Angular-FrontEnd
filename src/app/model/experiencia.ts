export class Experiencia {
    id? : number;
    nombreE : string;
    puestoE : string;
    descripcionE : string;
    periodoE : string;
    ubicacionE : string;
    webE: string;

    constructor(nombreE: string, puestoE: string, descripcionE: string, periodoE: string, ubicacionE: string, webE: string) {
        this.nombreE = nombreE;
        this.puestoE = puestoE;
        this.descripcionE = descripcionE;
        this.periodoE = periodoE;
        this.ubicacionE = ubicacionE;
        this.webE = webE;

    }
}
