function Inputform(props: any) {
    return (
        <li className="input_form">
            <span>{props.text}</span>
            <input 
                className="input_field"
                id={props.id}
                name={props.name} 
                type={props.type}
                />
        </li>
    )
}

export {Inputform};