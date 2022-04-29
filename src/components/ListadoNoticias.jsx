import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

    const {noticias, page, resultados, handlePageChange} = useNoticias()
   
    const totalPaginas = Math.ceil(resultados / 20)

  return (
    <>
    <Typography
    textAlign='center'
    marginY={5}
    variant='h3'
    component='h2'

    >
        Ultimas Noticias
    </Typography>
    <Grid
    container
    spacing={2}
    count={20}
    >
        {noticias.map(noticia => (
           <Noticia
           key={noticia.url}
           noticia={noticia}/>
        ))}
    </Grid>

        <Stack 
        container
        marginTop={5}
        marginBottom={3}
        alignItems={`center`} 
        justifyContent={`center`} 
        spacing={2}>
            <Pagination 
            count={totalPaginas} 
            color="primary" 
            onChange={handlePageChange}
            page={page}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias