import { createElement, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const withRouter = ComponentParam => {
    function ComponentWithRouterProp(props) {
        const navigate = useNavigate()
        const location = useLocation()
        const params = useParams()
        const ref = useRef(null)
        return createElement(ComponentParam, { ...props, navigate, location, params, ref }, props.children)
    }
    return ComponentWithRouterProp
}