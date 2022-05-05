import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Button, FormGroup, FormControl, InputLabel, FormHelperText, Input, Autocomplete, TextField } from '@mui/material';
import { ADD_TRANSFER } from '../graphql/Mutations'
import { GET_TRANSFERS } from '../graphql/Query'
import Grid from '@mui/material/Grid';

const AddTransfer = ({ transferData }) => {

    const [formData, setFormData] = useState({ movie: '', pay: 0, ref: '' })


    const [addTransfer] = useMutation(ADD_TRANSFER)

    const onSubmit = e => {
        e.preventDefault();
        addTransfer({
            variables: {

                movie: formData.movie,
                pay: parseFloat(formData.pay),
                ref: formData.ref


            }, refetchQueries: [{
                query: GET_TRANSFERS
            }]
        })

    }
    const movies = transferData?.getFilms.map(film => film.title)
    console.log("transfers", formData)
    return (
        <FormControl>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={movies}
                        value={formData.movie}

                        sx={{ width: 300 }}

                        onChange={(e, newValue) => setFormData({ ...formData, movie: newValue })}

                        renderInput={(params) => <TextField {...params} label="Movie" /
                        >} />
                </Grid>
                <Grid item xs={8}>
                    <TextField label="Pay" value={formData.pay} onChange={e => setFormData({ ...formData, pay: e.target.value })} />

                </Grid>
                <Grid item xs={8}>
                    <TextField label="Ref" value={formData.ref} onChange={e => setFormData({ ...formData, ref: e.target.value })} />

                </Grid>
                <Grid item xs={8}>
                    <Button onClick={onSubmit}>Submit</Button>
                </Grid>
            </Grid>


        </FormControl>
    )
}

export default AddTransfer

