import {  ObjectId } from 'mongoose';
  
  export interface RegisterFormData  {
    _id: ObjectId;
    name: string;
    fone: string;
    email: string;
    endereco: string;
  }
  
