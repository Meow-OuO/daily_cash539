function rand(max) {
  return Math.floor(Math.random() * max)+1;
}

function roll() {
let arr = [];
let random = rand(39);

for (i = 1; i <= 5; i++) {
                arr.push(random);
                while (arr.includes(random)) {
                    random = rand(39);
                }	
            }
			
document.getElementById("lotto539").innerHTML='開獎號碼:'+"&nbsp;"+arr.sort(function(a, b){return a-b})
}
