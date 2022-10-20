const names = document.getElementById("names");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const address = document.getElementById("address")
const sex = document.getElementById("sex")
const submitContact = document.getElementById("submitContact");
const message = document.getElementById("message");
message.style.display = "none"


// Save Contact

submitContact.addEventListener("click", (event)=>{
    event.preventDefault()
    message.style.display = "block"
    message.innerHTML = "Contact Saved"
    saveContact()
    setTimeout(()=>{history.go(0)}, 1000)
})

var contacts;
function saveContact(){

    if(!localStorage.contacts) {
        contacts = [];
    }
    
    else{
        contacts = JSON.parse(localStorage.contacts)
    }
    
    const contactList = {}
    
    contactList.names = names.value;
    contactList.phoneNumber = phoneNumber.value;
    contactList.email = email.value;
    contactList.address = address.value;
    contactList.sex = sex.options[sex.selectedIndex].text;
    
    contacts.push(contactList)
    
    localStorage.contacts = JSON.stringify(contacts)

    return true;
}

//View Contact List

const contactList = JSON.parse(localStorage.getItem("contacts"))
console.log(contactList[0].names)

const displayContacts = document.getElementById("displayContacts")

for(let i=0; i<contactList.length; i++){
   displayContacts.innerHTML += `<div onclick ="storeName('${contactList[i].names}')" onmouseover="this.style.cursor='pointer'">${contactList[i].names}</div>`
}


//Contact details

function storeName(name){
  localStorage.contactName = name;
  history.go(0)
}

const contactName = localStorage.getItem("contactName")

const contactDetail = contactList.find((event)=>{
   return event.names == contactName;
})

const displayContactDetails = document.getElementById("displayContactDetails")

displayContactDetails.innerHTML = `<div>Names: ${contactDetail.names}</div>
<div>Phone Number: ${contactDetail.phoneNumber}</div>
<div>Email: ${contactDetail.email}</div>
<div>Address: ${contactDetail.address}</div>
<div>Sex: ${contactDetail.sex}</div>
`
