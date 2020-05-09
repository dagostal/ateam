const bodyParser=require('body-parser')
var cors = require('cors')
const express=require('express')
const app=express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var contacts = []
const contact1 = {role:"Location Manager",id:1234,name:"alex",email:"thebigtoeman77@gmail.com",phoneNumber:'631.766.9998',projects:"asdfasdf",priority:1,currentProject:"-",booked:false,pending:true}
const contact2 = {role:"Sound",id:213123,name:"josh",email:"docterson@gmail.com",phoneNumber:"631.762.9820",projects:"asdfasdf",priority:9,booked:false,currentProject:"BigToesAllOver",pending:true}
const contact3 = {role:"Makeup",id:44,name:"jeremey",email:"jeremey@jeremey.com",phoneNumber:"927.123.8877",projects:"12312",priority:824,booked:true,currentProject:"-",pending:true}
const contact4 = {role:"Makeup",id:456745,name:"jeremey",email:"jeremey@jeremey.com",phoneNumber:"927.123.8877",projects:"12312",priority:76,booked:true,currentProject:"-",pending:true}
const contact5 = {role:"Makeup",id:7654674,name:"jeremey",email:"jeremey@jeremey.com",phoneNumber:"927.123.8877",projects:"12312",priority:5,booked:true,currentProject:"foxgoestospace",pending:false}
const contact6 = {role:"Makeup",id:2345234523,name:"jeremey",email:"jeremey@jeremey.com",phoneNumber:"927.123.8877",projects:"12312",priority:3,booked:true,currentProject:"goose",pending:false}
const contact7 = {role:"Makeup",id:2342324352234,name:"jeremey",email:"jeremey@jeremey.com",phoneNumber:"927.123.8877",projects:"12312",priority:3,booked:false,currentProject:"DuckDuc",pending:true}
const contact8 = {role:"Makeup",id:232,name:"jeremey",email:"jeremey@jeremey.com",phoneNumber:"927.123.8877",projects:"12312",priority:0,booked:true,currentProject:"DuckDuckGoose",pending:false}

contacts.push(contact1)
contacts.push(contact2)
contacts.push(contact3)
contacts.push(contact4)
contacts.push(contact5)
contacts.push(contact6)
contacts.push(contact7)
contacts.push(contact8)

app.post("/removeContact",function(req,res){
  let contactID = req.body.contactID
  contacts = contacts.filter(contact => contact.id !== contactID)
  res.json({"success":"true",allContacts:venues})
})

app.post("/newContact",function(req,res){
  console.log("HIT")
  console.log(req.body.newContact)
  let newContactToAdd = req.body.newContact


  let newContact = {
    role:newContactToAdd.newContactRole,
    id:Math.floor(Math.random() * Math.floor(100000)),
    name: newContactToAdd.newContactName,
    email: newContactToAdd.newContactEmail,
    phoneNumber: newContactToAdd.newContactPhoneNumber,
    priority: newContactToAdd.newContactPriority,
    booked:true,
    currentProject:"",
    pending:false
  }

  contacts.push(newContact)

  res.json({"success":"true",allContacts:venues})
})

app.get("/venues",function(req,res) {

  res.json(contacts)

})



var port = 3000 || process.env.PORT

app.listen(process.env.PORT,()=>{
  console.log('listening')
})
