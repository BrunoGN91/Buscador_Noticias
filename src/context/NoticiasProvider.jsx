import axios from 'axios';
import { useState, useEffect,createContext} from 'react';

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {


    const [categoria, setCategoria] = useState('general');
    const [page, setPage] = useState(1);
    const [resultados, setResultados] = useState(0);
    const [noticias, setNoticias] = useState([]);
    


    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const handlePageChange = (e, valor) => {
        setPage(valor)
    }


    useEffect(() => {
        const consultarApi  = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&pageSize=100&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url);
            setNoticias(data.articles);
            setResultados(data.totalResults)
            setPage(1)
        }
        consultarApi()
    },[categoria]);
    useEffect(() => {
        const consultarApi  = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${page}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url);
            setNoticias(data.articles);
            setResultados(data.totalResults)
            
        }
        consultarApi()
    },[page]);

    return (
        <NoticiasContext.Provider
        value={{
            noticias,
            categoria,
            page,
            resultados,
            handleChangeCategoria,
            handlePageChange
        }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext