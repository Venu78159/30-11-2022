function FuncPropExample(Props){
    console.log(Props)
    return(
        <div>
            <p>{Props.framework}</p>
            <p>{Props.number}</p>
        </div>
    )
}
export default FuncPropExample