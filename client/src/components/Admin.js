import React from 'react'
import { GET_FILMS, GET_SHAREHOLDERS, GET_TRANSFERS } from '../graphql/Query.js'
import { useQuery } from '@apollo/client'
import AddFilm from './AddFilm';
import Film from './Film';
import Shareholder from './Shareholder';
import AddTransfer from './AddTransfer'
import ShareholdersTable from './ShareholdersTable';
import Grid from '@mui/material/Grid';
import './App.css' ;

const Admin = () => {
    const { loading, error, data } = useQuery(GET_FILMS);
    const { loading: loadings, error: errors, data: dataShare } = useQuery(GET_SHAREHOLDERS);
    const { loading: loadingt, error: errort, data: dataTransfer } = useQuery(GET_TRANSFERS);
    if (loading) return <p>loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <>
            <AddFilm />
            {/* <Film data={data} /> */}
            <div className="">
            <Grid container spacing={12} >
                <Grid item xs={6}>
                    <Shareholder movieData={data} />
                </Grid>

                <Grid item xs={6}><AddTransfer transferData={data} /></Grid>
            </Grid>
            </div>
            <ShareholdersTable data={dataShare} />
        </>
    )
}

export default Admin
