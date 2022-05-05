import {gql} from 'apollo-server-express';

const typeDefs = gql`

type Film{
    id:ID
    title:String
}
type Shareholder{
    id:ID
    firstname:String
    lastname:String
    address: String
    IBAN: String
    movie: String
    balance: Int


}
type Transfer{
    id:ID
    movie: String
    pay: Int
    ref: String

}
type Query{
    welcome:String
    getFilms:[Film]
    getFilm(id:ID):Film

    getShareholders:[Shareholder]
    getTransfers:[Transfer]
}
type Mutation{
    addFilm(title:String):Film
    deleteFilm(id:ID):String
    updateFilm(id:ID,title:String):Film

    addShareholder(id:ID,firstname:String,lastname:String,address:String,IBAN:String,movie:String,balance: Int):Shareholder
    updateShareholder(id:ID,firstname:String,lastname:String,address:String,IBAN:String,movie:String,balance: Int):Shareholder

    addTransfer(id:ID, movie:String, pay:Int, ref:String):Transfer

}
`

export default typeDefs


