import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string = '';

  constructor(private storage: Storage, private httpClient: HttpClient) { }

  public uploadImage($event:any, name: string, id:number){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage,`imagen/` + name)
    uploadBytes(imgRef,file)
    .then(response =>{this.getImage(id, name)})
    .catch(error =>{console.log(error)})
  }

  getImages(){
    const imagesRef = ref(this.storage,'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la URL es:" + this.url);
      }
    })
    .catch(error =>{console.log(error)})
  }

  getImage(id:number, name:string){
    const imgRef = ref(this.storage,'imagen')
    list(imgRef)
    .then(async response => {
      for(let item of response.items){
        if(item.name == name){
          this.url = await getDownloadURL(item);
          console.log("la URL es:" + this.url);
        }
      }
    })
    .catch(error =>{console.log(error)})
  }
}
