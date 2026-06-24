import { CircularProgress } from "react-loader-spinner"
export const Loader = ({ style }) => {
    return (
        <section style={style}>
            <CircularProgress
                height="100"
                width="100"
                ariaLabel="circular-progress-loading"
                wrapperStyle={{}}
                wrapperClass="circular-progress-wrapper"
                color="#DD150D"
                secondaryColor="#F1C014"
            />
        </section>
    )
}
