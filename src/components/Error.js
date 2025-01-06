import { useRouteError } from "react-router";
import { useNavigate } from "react-router";

const Error = () => {
    const err = useRouteError();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Oops...</h1>
            <h2>Something went wrong!</h2>
            <h3>{err.status}: {err.statusText}</h3>
            <button onClick={() => navigate("/")}>Go Back to Home</button>
        </div>
    );
}

export default Error;
