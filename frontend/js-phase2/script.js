// function greet(){
//     console.log("Good morning");
    
// }

// greet()

// function add(a,b){
//     return a+b
// }

// console.log(add(5,6));

// function f(a="guest"){
//     console.log(a);
    
// }

// f()
// f("ritik")

// var ans=(a,b)=>{ return a>b?a:b}

// console.log(ans(5,6));

// let s="eik"
// s[0]='r'
// console.log(s);

// let an="" 
// function rev(str){
//     let j=str.length-1;
//     while(j>=0){
//         an+=str[j--]
//     }
//     return an
// }

// console.log(rev("ritik"));

let c=0

function sum(...num){
   for(let i=0;i<num.length;i++){
    c+=num[i]
   }
   return c
}

let res=sum(5,2,3)

let cntVowel=0

var vow=(str)=>{
    for(let i=0;i<str.length;i++){
        if(str[i]==='a'||str[i]==='e'|| str[i]==='i'|| str[i]==='o'||str[i]==='u') cntVowel++;
    }
    return cntVowel
}

let p=vow("Ritik")

