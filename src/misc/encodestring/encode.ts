const encode = (code: string) => {
 let chars = code.split("");
 let rv = "";
 for(let index = 0; index < chars.length; index++ ){
  let j = index;
  while(j < chars.length && (chars[j] === chars[index])){
   j++;
  }
  rv += `${(j - index)}${chars[index]}`
  index = j - 1; 
 }
 return rv;
}


export { encode }