import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"

const db = getFirestore()
const dbRef = collection(db, "contacts")

// TODO - App View

const leftCol = document.getElementById("left-col")
const rightCol = document.getElementById("right-col")
const backBtn = document.getElementById("back-btn")

backBtn.addEventListener('click', (e) =>{
    leftCol.style.display = "block"
    rightCol.style.display = "none"
})

const toggleLeftAndRightViewsOnMobile = () => {
    if(document.body.clientWidth <= 600){
        leftCol.style.display = "none"
        rightCol.style.display = "block"
    }
}

// SECTION - Data

let contacts = []

const getContacts = async () => {
    try{
        // onSnapshot listens to the document for changes
        await onSnapshot(dbRef,(docsSnap) => {
            contacts = []

            docsSnap.forEach((doc) => {
                const contact = doc.data()
                contact.id = doc.id
                contacts.push(contact)

                showContacts(contacts)
            })
        })
    } catch(err) {
        console.log(`Get Contacts ${err}`)
    }
}

getContacts()

//SECTION - Display contacts as list item

const contactList = document.getElementById("contact-list")

const showContacts = (contact) => {
    contacts.forEach((contact) => {
        const li = `
        <li class="contact-list-item" id=${contact.id}>
        <div class="media">
        <div class = "letter">${contact.firstname.charAt(0)}${contact/lastname.charAt}(0)</div>
        </div>
        <div class="content">
        <div class = title>
        ${contact.firstname} ${contact.lastname}
        </div>
        <div class="sub-title">${contact.email}</div>
        </div>

        <div class="action">
        <button class="edit-user">Edit</button>
        <button class="delete-user">Delete</button>
        </div>
        </li>
        `

        contactList.innerHTML += 1
    })
}