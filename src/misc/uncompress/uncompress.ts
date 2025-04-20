const uncompress = (s: string) => {
 let chars = s.split('');
 const numbers = '0123456789';
 let rv = [];
 for (let i = 0; i < chars.length; i++) {
  let nums = [];
  while (numbers.includes(chars[i])) {
   nums.push(chars[i]);
   i++;
  }
  let num = parseInt(nums.join(''));
  for (let j = 0; j < num; j++) {
   rv.push(chars[i]);
  }
 }
 return rv.join('');
};

export {
 uncompress,
};
