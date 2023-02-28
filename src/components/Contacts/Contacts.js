const Contacts = ({contacts, onDelete}) => {
    return(
        <ul><h2>Contacts</h2>
            {contacts.map(cont => (
                <li key={cont.id}>
                    <p>{cont.name} : {cont.number}</p>
                    <button onClick={() => onDelete(cont.id)} aria-label="Delete">Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default Contacts