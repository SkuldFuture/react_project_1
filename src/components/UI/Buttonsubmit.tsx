function Buttonsubmit(props:any) {
    return (
        <button 
        className={props.className} 
        type="submit">
            {props.text}
        </button>
    )
}

export {Buttonsubmit}