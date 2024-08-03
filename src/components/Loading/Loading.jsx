import { FadeLoader } from "react-spinners";

export const Loader = () => {
    return (
        <FadeLoader
        size={150}
        color="aquamarine"
        aria-label="Loading Spinner"
        data-testid="loader"/>
    )
}