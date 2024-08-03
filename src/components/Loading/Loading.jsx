import { FadeLoader } from "react-spinners";

export const Loader = () => {
    return (
        <FadeLoader
        size={150}
        color="blue"
        aria-label="Loading Spinner"
        data-testid="loader"/>
    )
}