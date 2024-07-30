
/* importamos los componentes necesarios de react router  */
import { NavLink, useParams, Navigate } from "react-router-dom";

/* estilos */
import styled from "styled-components";


/* posts es un array de objetos  */
import posts from "./posts";



export function Header(){
    return(
        <ContenedorHeader>
            <Titulo>Mi blog personal!</Titulo>
            <Menu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>
            </Menu>
        </ContenedorHeader>
    )
}

/* estilos del header */
const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;

`

const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }

    a:hover{
        color: #191681;
    }

    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
`


/* estos componentes son basicos y se usan, en este caso, solo para rellenar los campos de ejemplo  */

export function Inicio(){
    return(
        <div>
            <h2>Pagina de inicio</h2>
            <p>Esta es la pagina principal de nuestro sitio</p>
        </div>
    )

}



export function AcercaDe(){
    return(
        <div>
            <h2>Acerca de</h2>
            <p>Hola me llamo Jorge</p>
        </div>
    )
}



export function Error404(){
    return(
        <div>
            <h2>Error 404</h2>
            <p>La pagina buscada no existe o fue cambiada de lugar</p>
        </div>
    )
}







/* la diferencia con otro ejercicio similar radica en que cuando se carga un componente este puede tener mas rutas que a su vez nos llevan a otros contenidos

En este caso cuando se carga la pagina blog esta tendra otros links que nos llevaran, en este caso, a un articulo que sera un array de objetos  

Cada link del <ul> sera un <NavLink> que pondra en la barra de direcciones la pagina, blog, y el numero del articulo. Este se reemplaza en el componente <Route> despues de los dos puntos (:) 




*/


export function Blog(){
    return(
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map(post=>
                    <li key={post.id}><NavLink to={`/blog/articulo/${post.id}`}>{post.titulo}</NavLink></li>
                )}
            </ul>
        </div>
    )
}








export function Post(){



    /* 
    el hook useParams() tiene la mision de identificar el valor dinamico de la URL, por ejemplo si la ruta en la barra de direcciones es 
    /blog/articulo/1 useParams() sacara como valor dinamico el 1, si la ruta es /blog/articulo/2, sacara el 2 y si es /blog/articulo/3 sacara el 3 

    Con un operador ternario podemos averiguar si el valor de la posicion en el array existe devolviendo un <div> con la informacion del objeto en dicha ubicacion.

    Si la ubicacion no existe (puede que haya sido manipulada desde la barra de direcciones) el componente <Navigate> reemplazara la direccion en la barra de direcciones para que luego un <Route> direccione a dicha pagina
    */

    const {id} = useParams();




    return (
        <>

        {
            posts[id-1] ? 
                <div>
                    <h1>{posts[id -1].titulo}</h1>
                    <p>{posts[id -1].texto}</p>
                </div>
            :
            <Navigate replace to='/blog' />
        }
        
        
        </>
    )

}








