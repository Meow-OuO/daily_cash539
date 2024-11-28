function roll() {
  let num = 39;
  let arr = [];

  while (arr.length < 5) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }

  document.getElementById("lotto539").innerHTML = '開獎號碼: ' + "&nbsp;" + arr.sort(function(a, b){ return a - b; });
}
