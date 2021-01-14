
export default function TimePicker({
    onChange,
    value
}){

    return(
        <input type="time" value={value} onChange={onChange}/>
    )
}