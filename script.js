
function formatDate (dataObject) {
  const parts={
  month:dataObject.getMonth()+1,
  date:dataObject.getDate().toString().padStart(2, "0"),
  year:dataObject.getFullYear(),
};
return  `${parts.date}/${parts.month}/${parts.year}`
} 
const myDate= new Date();
const myDateFormatted=formatDate(myDate)
document.getElementById("span1").innerHTML=myDateFormatted
document.getElementById("span2").innerHTML=myDateFormatted
document.getElementById("span3").innerHTML=myDateFormatted
document.getElementById("span4").innerHTML=myDateFormatted



// const dayJsObject = dayjs();

// const el=document.getElementById(span1)
// el.innerHTML=dayJsObject.format("DD/MM/YYYY")