
var displayArray=Array.from(users); // get the records from json array
var noOfContacts=displayArray.length; // total no of contacts

var contactsPerPage=10;
var Pagescount=Math.ceil(noOfContacts/contactsPerPage); // calculating no. of pages 



//Inserting Contacts According to page number
var TotalNo1=document.querySelectorAll('.contact-item.cf'); // fetching contacts with its class
var headers1=Array.from(TotalNo1); // putting in an array

//Adding page-number  to html
var i=1; // loop variable
var paginationHtml="";
while(i<=Pagescount){
    paginationHtml+="<li><a href='#' id="+i+" onClick=Display(this.id) >"+i+"</a></li>";
    i++;
}

document.querySelector('#pgNo').insertAdjacentHTML('afterbegin', paginationHtml);

// when page loades for first time
window.onload = function() {  
     while(i<=Pagescount){
        paginationHtml+="<li><a href='#' id="+i+" onClick=Display(this.id) >"+i+"</a></li>";
    i++;
}

  for(i =0;i<contactsPerPage;i++){
    const htmlElement= `<li class="contact-item cf"><div class="contact-details"><img class="avatar" src="${displayArray[i].image}">
       <h3>${displayArray[i].name}</h3><span class="email" >${displayArray[i].email}</span></div>
      <div class="joined-details"> <span class="date">Joined ${displayArray[i].joined}</span></div>
  </li>`
  document.querySelector('.contact-list').insertAdjacentHTML('beforeend',htmlElement);

  }
  document.querySelector('.totalCount').insertAdjacentHTML('beforeend',`<h3>Total  ${displayArray.length}</h3>`);
 }
 // Function to dispay contacts 
function Display(CurrentPageNo){
var ContactToDisplay=0,CurrentPageNo;
document.querySelector('.contact-list').innerHTML=""
for(i =0;i<contactsPerPage;i++){
    ContactToDisplay= (CurrentPageNo-1)*contactsPerPage+i;
    if(ContactToDisplay<displayArray.length){
    const htmlElement= `<li class="contact-item cf"><div class="contact-details"><img class="avatar" src="${displayArray[ContactToDisplay].image}">
       <h3>${displayArray[ContactToDisplay].name}</h3><span class="email">${displayArray[ContactToDisplay].email}</span></div>
      <div class="joined-details"> <span class="date"> Joined ${displayArray[ContactToDisplay].joined}</span></div>
  </li>`

  document.querySelector('.contact-list').insertAdjacentHTML('beforeend',htmlElement);
    }
  }

}