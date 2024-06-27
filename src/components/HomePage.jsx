function HomePage() {
    return (
        <>
            <h1>Movies</h1>
            <form>
                <label for="fname">Movie list:</label>
                <input type="text" id="song1" name="movie input"/><br/>
                <input type="button" value="Click me" onclick="msg(Add Movie)"></input>
                
            </form>
        </>

    );

}

export default HomePage;