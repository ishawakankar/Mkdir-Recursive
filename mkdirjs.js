let rxjs = require('rxjs');
let fs = require('fs');
let input = "tmp/a/b/c/d";
//input = input +"/";
let array = input.split("/")
console.log(array)
let observable = rxjs.Observable.from(array).reduce(
   (final,current)=>{
       console.log(final+current)
       console.log(!fs.existsSync(final));
       if(!fs.existsSync(final)){
       fs.mkdirSync(final)
       }
       // fs.mkdir(current);
       return final+current+"/";
   },"./"
).subscribe((d)=>{console.log("final - "+d)})