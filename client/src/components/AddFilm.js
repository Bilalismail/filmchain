import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TODO } from '../graphql/Mutations'
import { GET_FILMS } from '../graphql/Query'

const AddFilm = () => {
    const [film, setFilms] = useState({ title: '' })

    const [addFilm] = useMutation(ADD_TODO)

    const onSubmit = e => {
        e.preventDefault();
        addFilm({
            variables: {
                title: film.title
            }, refetchQueries: [{
                query: GET_FILMS
            }]
        })

    }

    return (
        <div>
            <div className="container todobox">

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Enter a Film name</label>
                        <input type="text" className="form-control" 
                        placeholder="Enter Film Name" 
                        value={film.title}
                        onChange={e => setFilms({...film, title: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddFilm
