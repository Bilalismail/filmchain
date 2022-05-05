import React from 'react'
import ShareholdersTable from './ShareholdersTable';
import { GET_SHAREHOLDERS } from '../graphql/Query.js'
import { useQuery } from '@apollo/client'
const Wallet = () => {
    const { loading: loadings, error: errors, data: dataShare } = useQuery(GET_SHAREHOLDERS);
    return (
        <div>
            <ShareholdersTable data={dataShare}/>
        </div>
    )
}

export default Wallet
