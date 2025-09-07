function ClockDateTime(){
    let date = new Date();
    return (
        <div>
            <p>this is the current time :{date.toLocaleDateString()}-{""}
                {date.toLocaleTimeString()}
            </p>
        </div>
    )
}
export default ClockDateTime