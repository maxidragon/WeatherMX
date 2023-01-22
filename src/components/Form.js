const Form = props => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input type="text" value={props.value} onChange={props.change} placeholder="Enter city"/>
            </form>
        </div>
    )
}

export default Form;