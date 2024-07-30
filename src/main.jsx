
import ReactDOM from 'react-dom/client'

/* importamos los componentes necesarios de react router  */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* importamos los componentes que se usaran en cada <Route>  */
import { Header, Inicio, Blog, AcercaDe, Post, Error404 } from './componentes.jsx'

/* estilos */
import styled from 'styled-components'
import './index.css'

/* se direcciona al root del html */
const ROOT = ReactDOM.createRoot(document.getElementById('root'))


//se debe instalar react router, pagina https://reactrouter.com/en/main/start/tutorial, con la instruccion:
//'npm install react-router-dom localforage match-sorter sort-by'

//Tambien se debe instalar styled component, pagina https://styled-components.com/docs/basics#installation, con la instruccion: 
//'npm install styled-components'

// una vez instaladas dichas dependencias, podemos verlas en package.json



function App() {
  return (

    <BrowserRouter> {/* encerramos la app en el componente <BrowserRouter> */}
      <ContenedorPrincipal >{/* es un 'div' con styled */}

        <Header />{/* este componente tiene el titulo y las rutas de la app usando <NavLink> */}

        <Main>


          <Routes>
            {/* estas rutas aparecen en la pantalla del cliente */}
        
            <Route path='/' element={ <Inicio /> }/>
            <Route path='/blog' element={ <Blog /> }/>
            <Route path='/acerca-de' element={ <AcercaDe /> }/>


            {/* esta ruta se usa cuando la barra de direcciones tiene una ruta inexistente */}
            <Route path='*' element={ <Error404 /> }/>




            {/* 
            Cuando nos dirigimos a la pagina 'blog', esta carga varias rutas que una vez clicadas nos debe mostrar solo el contenido de dicho enlace, por ejemplo: si queremos ir al articulo 1 del blog se mostrara dicho articulo, ademas en la barra de direcciones tambien se debe ver la direccion correcta de dicho articulo. Para ello se usa la siguiente ruta:
            */}

            <Route path='/blog/articulo/:id' element={ <Post /> }/>

            {/* 
            siendo ':id' un parametro dinamico de la URL, es decir que el NavLink correspondiente colocara en la barra de direcciones la ruta fija hasta los dos puntos, despues de estos el id cambiara, por ejemplo: NavLink colocara rutas como estas: 
            /blog/articulo/1
            /blog/articulo/2
            /blog/articulo/3
            En cada caso el :id cambió


            Para saber que 'post' debera traer 'element' se usa el hook useParams()
            
            */}


          </Routes>

          
          
          
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>

    
  )
}


const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px
`


const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`





ROOT.render(
  <App />
)




/* 
RESUMEN 


1) se hace el uso de los componentes BrowserRouter, Routes, Route y NavLink de forma ya estudiada

2) para acceder a una ruta dinamica:
  El <NavLink> debera colocar la parte dinamica usando plantillas literales: 
  <NavLink to={`/blog/articulo/${post.id}`}>

  El 'path', en el componente <Route>, debe terminar con ':id' donde la plantilla literal, del <NavLink, tenga su ${}:
  <Route path='/blog/articulo/:id' element={ <Post /> }/>


  El 'element', del componente <Route>, traera el componente correspondiente, pero este componente debera usar el hook 'useParams()' que se encargara de sacar la parte dinamica de la URL para luego usarla en el codigo: 
  const {id} = useParams()


El componente <Navigate> se usa, en este caso, para reemplazar o cambiar la direccion en la barra de direcciones usando dos propiedades: 'replace' y 'to="nueva direccion"' por ejemplo si no se encuentra la ruta dinamica o el usuario manipula la barra de direcciones:
<Navigate replace to='/blog' />  


PILAS!!! importe los componentes para el uso de las rutas desde 'react-router-dom'





*/






