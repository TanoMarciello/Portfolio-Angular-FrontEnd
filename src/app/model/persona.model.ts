export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    edad: number;
    descripcion: string;
    nacionalidad: string;
    estadoCivil: string;
    titulo: string;
    domicilio: string;
    email: string;
    telefono: string;
    facebook: string;
    instagram: string;
    discord: string;
    github: string;
    img:string;

    constructor(nombre: string,apellido: string, edad:number, descripcion: string,
                nacionalidad: string, estadoCivil: string, titulo: string, domicilio: string,
                email: string,telefono: string,facebook: string,instagram: string,discord: string,
                github: string,img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.descripcion = descripcion;
        this.nacionalidad = nacionalidad;
        this.estadoCivil = estadoCivil;
        this.titulo = titulo;
        this.domicilio = domicilio;
        this.email = email;
        this.telefono = telefono;
        this.facebook = facebook;
        this.instagram = instagram;
        this.discord = discord;
        this.github = github;
        this.img = img;
    }
}
