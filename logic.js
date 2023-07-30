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
    const url = document.getElementById("url").value;
  const check = url.includes("www.") && url.includes(".com");
if (check === true){
  const backlink = generateString(6);
  const shortenedUrl = "https://www.sudarshantimalsina.com.np/" + backlink;
document.getElementById("output").textContent = shortenedUrl
}
else{
  alert("please provide a valid web address!")
}}
const msg = "The Website is yet to be finished!"
document.getElementById("gms").textContent = msg