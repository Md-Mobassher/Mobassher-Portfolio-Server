import { IContact } from './contact.interface'
import { Contact } from './contact.model'

const createContact = async (payload: IContact) => {
  const result = await Contact.create(payload)
  return result
}

const getAllContacts = async () => {
  const result = await Contact.find()
  return result
}

const deleteContact = async (id: string) => {
  await Contact.findByIdAndDelete(id)
  return null
}

export const ContactServices = {
  createContact,
  getAllContacts,
  deleteContact,
}
