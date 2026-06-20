import { createElement } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const withRouter = ComponentParam => {
    return (props) => {
        const navigate = useNavigate()
        const location = useLocation()
        const params = useParams()
        return createElement(ComponentParam, { ...props, navigate, location, params }, props.children)
    }
}