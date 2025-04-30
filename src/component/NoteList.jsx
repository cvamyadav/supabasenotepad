

import { useEffect, useState } from 'react'
import { getNotes } from '../services/notes'

export const NoteList = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesData = await getNotes()
        setNotes(notesData)
      } catch (error) {
        console.error('Error fetching notes:', error)
        setError('Failed to load notes. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>
  )

  if (error) return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
      {error}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No notes yet</h3>
          <p className="mt-1 text-gray-500">Get started by creating your first note!</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div key={note.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">{note.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line line-clamp-3">
                  {note.content || <span className="text-gray-400">No content</span>}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-full ${note.is_public ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {note.is_public ? 'Public' : 'Private'}
                  </span>
                  <time className="text-xs text-gray-500">
                    {new Date(note.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NoteList