import { gql } from '@apollo/client';
export const ADD_TODO = gql`
mutation addFilm($title:String){
    addFilm(title:$title){
        id
        title
    }
}

`

export const ADD_SHAREHOLDER = gql `
mutation addShareholder($firstname:String,$lastname:String,$address:String,$IBAN:String,$movie:String,$balance: Int){
    addShareholder(firstname:$firstname,lastname:$lastname,address:$address,IBAN:$IBAN,movie:$movie, balance: $balance){
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
export const ADD_TRANSFER = gql `
mutation addTransfer($movie:String,$pay:Int,$ref:String){
    addTransfer(movie:$movie,pay:$pay,ref:$ref){
        id
        movie
        pay
        ref
    }
}
`