import "../styles/Form.scss";

export function Form () {
    return(
        <section>
            <h1 className="title">Login</h1>

            <form className="form">
                <input type="text" />
                <input type="password" />
                <button>Sign in</button>
            </form>
        </section>
    )
    }