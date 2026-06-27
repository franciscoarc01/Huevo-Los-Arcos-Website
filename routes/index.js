import App from "../App.jsx";
import { Inicio as InicioCarnitas } from "../views/carnitas/Inicio.jsx";
import { Inicio as InicioHuevo } from "../views/huevo/Inicio.jsx"

const routes = [
    { path: "/", Component: App },
    { path: "/carnitas/*", Component: InicioCarnitas },
    { path: "/huevo/*", Component: InicioHuevo }
]
export default routes;