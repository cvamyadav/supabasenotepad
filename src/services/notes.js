// This file contains functions to interact with the Supabase database for notes
// It imports the Supabase client instance from the `supabase.js` file and defines two functions: `getNotes` and `createNote`.
import { supabase } from './supabase'

export const getNotes = async () => {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export const createNote = async (note) => {
  const { data, error } = await supabase
    .from('notes')
    .insert(note)
    .select()

  if (error) throw error
  return data
}