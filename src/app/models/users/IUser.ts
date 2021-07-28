import {IUserAddress} from "./IUserAddress";
import {IUserCompany} from "./IUserCompany";

export interface IUser {
  id : number;
  name : string;
  username : string;
  email : string;
  address : IUserAddress;
  phone : string;
  website : string;
  company : IUserCompany;
}
