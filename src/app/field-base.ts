export class FieldBase{
        value:string;
        name: string;
        title: string;
        required: boolean;
        ControlType: string;
        type:string;
        constructor(options: {
            name?: string,
            value?:string;
            title?: string,
            required?: boolean,
            ControlType?: string,
            type?:string,
          } = {}) {
          this.value = options.value || '';
          this.name = options.name || '';
          this.title = options.title || '';        
          this.required = !!options.required; 
          this.ControlType = options.ControlType || '';
          this.type = options.type;
        } 
}