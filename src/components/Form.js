import './Form.css';
import {TextField} from "@mui/material";

const Form = props => {
    return (
        <div>
            <form onSubmit={props.submit} className="form">
                <TextField id="outlined-basic" sx={{ input: { color: 'white' }}} value={props.value} onChange={props.change} label="Enter city" variant="outlined" />
            </form>
        </div>
    )
}

export default Form;