function prank() {
  const lr = document.getElementById("url").value;
  const abc =lr.toLowerCase()
  const chk = abc.includes("www.") && abc.includes(".com");
if (chk === true){
 const pr="https://www.sudarshantimalsina.com.np/xvgch"
document.getElementById("gms").textContent = pr
  }
else{
  alert("please provide a valid web address!")
}}
