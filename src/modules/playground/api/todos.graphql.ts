import { gql } from '@apollo/client'

export const TodosQuery = gql`
    query Todos {
        todos {
            id
            task
        }
    }
`
