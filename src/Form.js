
export default function Form(){
    return(<>
        <form>
        <label for="fname">User name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/><br/>
        <label for="lname">Password:</label><br/>
        <input type="password" id="pw" name="pw"/><br/><br/>
        <input type="submit" value="Sign In"/>
        </form>
        </>
    );
}
