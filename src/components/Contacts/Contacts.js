import { List, ListItem } from "./Contact.styled"

const Contacts = ({contacts, onDelete}) => {
    return(
        <List>
            <h2>Contacts</h2>
            {contacts.map(cont => (
            <ListItem key={cont.id}>
                <p>{cont.name} : {cont.number}</p>
                <button onClick={() => onDelete(cont.id)} aria-label="Delete">Delete</button>
            </ListItem>
            ))}
        </List>
    )
}

export default Contacts