let obj = {
       gdgdg: 2442,
       sfdsfsf: 22352,
       sfsfsf: 'dhdhdh',
       sfsdfsdf: {
         dgdg: 244224,
         sfsffs: 42442
       }
};
for (let key in obj){
       for(let i in obj[key]){
              if(typeof(obj[key]) === 'object'){
                     console.log(`властивість ${key} має значення ${obj[key][i]}`);
              } else {
                     console.log(`властивість ${i} має значення ${obj[key]}`);
              }
       }
}