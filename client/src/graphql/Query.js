import { gql } from '@apollo/client'

export const GET_FILMS = gql`
{
    getFilms {
        id
        title
    }
}

`;

export const GET_SHAREHOLDERS = gql`
{
    getShareholders{
        id
        firstname
        lastname
        address
        IBAN
        movie
        balance
    }
}


`

export const GET_TRANSFERS = gql`
{
    getTransfers{
        id
        movie
        pay
        ref
    }
}


`