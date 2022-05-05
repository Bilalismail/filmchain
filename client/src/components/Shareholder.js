import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Button, FormGroup, FormControl, InputLabel, FormHelperText, Input, Autocomplete, TextField } from '@mui/material';
import { ADD_SHAREHOLDER } from '../graphql/Mutations'
import { GET_SHAREHOLDERS } from '../graphql/Query';
import Grid from '@mui/material/Grid';

const Shareholder = ({ movieData }) => {

    // const [Firstname, setFirstname] = useState({ firstname: '' })
    // const [Lastname, setLastname] = useState({ lastname: '' })
    // const [IBAN, setIBAN] = useState({ IBAN: '' })
    // const [Address, setAddress] = useState({ address: '' })
    // const [Movie, setMovie] = useState({movie: ''})

    const [formData, setFormData] = useState({ firstname: '', lastname: '', IBAN: '', address: '', movie: '', balance: 0 })


    const [addShareholder] = useMutation(ADD_SHAREHOLDER)

    const onSubmit = e => {
        e.preventDefault();
        addShareholder({
            variables: {
                firstname: formData.firstname,
                lastname: formData.lastname,
                IBAN: formData.IBAN,
                address: formData.address,
                movie: formData.movie,
                balance: formData.balance


            }, refetchQueries: [{
                query: GET_SHAREHOLDERS
            }]
        })

    }
    const movies = movieData?.getFilms.map(film => film.title)
    console.log("movies", formData)
    return (
        <FormControl>
            <label className="form-label">Add a New Shareholder</label>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <TextField label="First Name" value={formData.firstname} onChange={e => setFormData({ ...formData, firstname: e.target.value })} />

                </Grid>
                <Grid item xs={8}>
                    <TextField label="Last Name" value={formData.lastname} onChange={e => setFormData({ ...formData, lastname: e.target.value })} />

                </Grid>
                <Grid item xs={8}>
                    <TextField label="IBAN" value={formData.IBAN} onChange={e => setFormData({ ...formData, IBAN: e.target.value })} />

                </Grid>
                <Grid item xs={8}>
                    <TextField label="Address" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />

                </Grid>
                <Grid item xs={6}>
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
            </Grid>


            <Button onClick={onSubmit}>Submit</Button>
        </FormControl>
    )
}

export default Shareholder
