function rand(max) {
  return Math.floor(Math.random() * max)+1;
}

let num = 39
function roll() {
let arr = [];
let random = rand(num);

for (i = 1; i <= 5; i++) {
                arr.push(random);
                while (arr.includes(random)) {
                    random = rand(num);
                }	
            }
			
document.getElementById("lotto539").innerHTML='開獎號碼:'+"&nbsp;"+arr.sort(function(a, b){return a-b})
}
