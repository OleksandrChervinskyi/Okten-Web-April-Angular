import {IUserAddress} from "./userAddress";
import {IUserCompany} from "./userCompany";

export interface IUser {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": IUserAddress,
  "phone": string,
  "website": string,
  "company": IUserCompany
}
