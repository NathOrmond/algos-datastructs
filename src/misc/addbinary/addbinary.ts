export const addBinary = (a: string, b: string): string => {
    
    let arr = a.split(''), brr = b.split(''), rrr = [];
    let aIndex = a.length, bIndex = b.length;
    aIndex--;
    bIndex--;

    let carry = 0;
    while(aIndex >=0 || bIndex >=0){
        
        let sum = 0 + carry;
        
        if(aIndex>= 0){
            sum += parseInt(arr[aIndex]);
            aIndex--;
        }

        if(bIndex>=0){
            sum += parseInt(brr[bIndex])
            bIndex--;
        }


        switch(sum){ 
            case 0:
                carry = 0;
                sum = 0;
                break;
            case 1:
                carry = 0;
                sum = 1;
                break;
            case 2:
                carry = 1;
                sum = 0;
                break;
            case 3:
                carry = 1;
                sum = 1;
                break;
        }
        rrr.unshift(sum);
    }

    if(carry) rrr.unshift(1);
    return rrr.join('') + ""; 
};