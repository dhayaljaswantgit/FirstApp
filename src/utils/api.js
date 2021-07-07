import axios from "axios";

export default class API {
  baseURL = "https://reqres.in/api/";

  call({ apiEndPoints, type, params }) {
    return axios[type](this.baseURL + apiEndPoints, params);
  }
}
