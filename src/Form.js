const Form = ({name}) =>{
    function handleSubmit(){
        alert (`Log in Successful using ${name} `)
    }
    return(<>
        <h2> Sign in using {name} </h2>
        <form onSubmit = {handleSubmit}>
        <label for="fname">User name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/><br/>
        <label for="lname">Password:</label><br/>
        <input type="password" id="pw" name="pw"/><br/><br/>
        <input type="submit" value="Sign In"/>
        </form>
        </>
    );
}
export default Form;
