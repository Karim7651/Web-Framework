import axios, { AxiosPromise } from 'axios';
interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    //returns a promise letting user | posts deal with it
    return axios.get(`${this.rootUrl}/${id}`);
  }

  //has id : exists in backend (put:replace : id)
  //doesn't have id : doesn't exist in backend (post : new resource : no id param)
  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      //put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
