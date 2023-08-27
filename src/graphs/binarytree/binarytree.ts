import { IBinaryNode } from './types';

export class Node implements IBinaryNode { 
    
    value: any;
    left: any;
    right: any;

    constructor( value: any, left: any, right: any){
        this.value = value;
        this.left = left;
        this.right = right;
    }

}