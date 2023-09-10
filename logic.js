function generateString(length) {
    const characters =   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    const Charlen = characters.length;
  
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * Charlen);
      result += characters.charAt(random);
    }
  
    return result;
  }
  
  function logic() {
      const rl = document.getElementById("url").value;
    const url =rl.toLowerCase()
    const check = url.includes("www.") && url.includes(".com");
  if (check === true){
    const backlink = generateString(6);
    const shortenedUrl = "https://www.sudarshantimalsina.com.np/" + backlink;
  document.getElementById("output").textContent = shortenedUrl
  }
  else{
    alert("please provide a valid web address!")
  }}
  
  function prank() {
    const lr = document.getElementById("url").value;
    const abc =lr.toLowerCase()
    const chk = abc.includes("www.") && abc.includes(".com");
  if (chk === true){
   const pr="your shortned link is :            https://www.sudarshantimalsina.com.np/xvgch"
  document.getElementById("gms").textContent = pr
    }
  else{
    alert("please provide a valid web address!")
  }}
  function  test(){
    alert("works!")
  }
