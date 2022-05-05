import Film from './models/Film.js'
import Shareholder from './models/Shareholder.js'
import Transfer from './models/Transfer.js'
const resolvers = {
    Query: {
        welcome: () => {
            return "Welcome Bilal"
        },
        getFilms: async () => {
            const films = await Film.find()
            return films
        },
        getFilm: async (roots, args) => {
            const film = await Film.findById(args.id)
            return film
        },
        getShareholders: async () => {
            const shareholders = await Shareholder.find()
            return shareholders
        },
        getTransfers: async () => {
            const transfers = await Transfer.find()
            return transfers
        }
    },
    Mutation: {
        addFilm: async (root, args) => {
            const newFilm = new Film({ title: args.title })

            await newFilm.save()
            return newFilm
        },
        deleteFilm: async (root, args) => {
            await Film.findByIdAndDelete(args.id);
            return "Todo deleted"
        },
        updateFilm: async (root, args) => {
            const { id, title } = args;
            const updatedFilm = {};
            if (title != undefined) {
                updatedFilm.title = title
            }


            const film = await Film.findByIdAndUpdate(id, updatedFilm, { new: true })

            return film
        },
        addShareholder: async (root, args) => {
            const newShareholder = new Shareholder({ firstname: args.firstname, lastname: args.lastname, address: args.address, IBAN: args.IBAN, movie: args.movie, balance: args.balance })

            await newShareholder.save()
            return newShareholder
        },
        updateShareholder: async (root, args) => {
            const { id, movie, balance } = args;
            const updatedShareholder = {};
            if (movie!= undefined) {
                updatedShareholder.movie = movie
            }
            if (balance!= undefined) {
                updatedShareholder.balance = balance
            }
            
            find
            const shareholder = await Shareholder.findAndModify(movie, updatedShareholder, { new: true })

            return shareholder
        },
        addTransfer: async (root, args) => {
            const newTransfer = new Transfer({ movie: args.movie, pay: args.pay, ref: args.ref })
            
            await newTransfer.save()
            return newTransfer
        },

    }
}

export default resolvers;