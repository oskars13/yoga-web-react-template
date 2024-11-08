import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainTemplate from "./pages/MainTemplate";

//pages
import Home from "./pages/Home";
import QuienSoy from "./pages/QuienSoy";
import MiPrioridad from "./pages/MiPrioridad";
import Recursos from "./pages/Recursos";
import Contacto from "./pages/Contacto";


export enum paths {
  home = 'home',
  quienSoy = 'quien-soy',
  prioridad = 'mi-prioridad',
  recursos = 'recursos',
  contacto = 'contacto'
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainTemplate/>,
    children: [
      {
        path: paths.home,
        element: <Home />
      },
      {
        path: paths.quienSoy,
        element: <QuienSoy />
      },
      {
        path: paths.prioridad,
        element: <MiPrioridad />
      },
      {
        path: paths.recursos,
        element: <Recursos />
      },
      {
        path: paths.contacto,
        element: <Contacto />
      }
    ]
  }
]

export const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
})