const Contacts = ({contacts}) => {
    return(
        <ul>
            {contacts.map(cont => (
                <li key={cont.id}>
                    <p>{cont.name} : {cont.number}</p>
                </li>
            ))}
        </ul>
    )
}

export default Contacts