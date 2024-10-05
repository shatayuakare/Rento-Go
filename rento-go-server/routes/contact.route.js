import express from "express"
import { deleteContact, getContact, getContacts, newContact, updateContact } from "../controller/contact.controller.js"

const contactRoute = express.Router()

contactRoute.get("/", getContacts)
contactRoute.get("/:id", getContact)
contactRoute.get("/update/:id", updateContact)
contactRoute.delete("/delete/:id", deleteContact)
contactRoute.post("/new", newContact)

export default contactRoute