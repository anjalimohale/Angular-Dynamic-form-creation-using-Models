import { FieldBase } from "./field-base";
export class Container{
   
    key: string;
    children:FieldBase[];
  
    constructor(options: {
      
        key?: string,
        children?: FieldBase[];
      } = {}) {
      this.key = options['key'];
      this.children = options['children'];
      }
}