
window.onload = function() {
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let extension = ['.com','.net']

  for (let itemP of pronoun) {
    for (let itemA of adj){
        for(let itemN of noun){
            for (itemE of extension){
                console.log(`${itemP}${itemA}${itemN}${itemE}`)
            };
          };
        };
      };
    };
