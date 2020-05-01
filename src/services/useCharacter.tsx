import { useQuery } from 'react-query'
import axios from 'axios'
import { Character } from '../types'

const fetchCharacter = async (_key: string, id: number): Promise<Character> => {
  return (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data
}

export const useCharacter = (id: number) => {
  return useQuery(!!id && ['Character', id], fetchCharacter)
}
