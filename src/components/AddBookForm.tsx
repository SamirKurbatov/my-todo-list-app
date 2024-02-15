import React, { ChangeEvent, FC, useState } from 'react'
import { IBookProps } from '../types/IBookProps'
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/MyButton'

interface IAddBookFormProps {
	books: IBookProps[]
	setBooks: React.Dispatch<React.SetStateAction<IBookProps[]>>
}

const AddBookForm: FC<IAddBookFormProps> = ({ books, setBooks }) => {
	const [book, setBook] = useState<IBookProps>({
		title: '',
		author: '',
		description: '',
	})

	function handleFieldChanged(fieldName: keyof IBookProps) {
		return function (e: ChangeEvent<HTMLInputElement>) {
			setBook(prevBook => ({
				...prevBook,
				[fieldName]: e.target.value,
			}))
		}
	}

	const addBook = () => {
		setBooks([...books, book])
		setBook({
			// Clear the form after adding a book
			title: '',
			author: '',
			description: '',
		})
	}

	return (
		<>
			<h2 className='font-bold text-3xl text-center text-green-700'>
				Добавление книги
			</h2>
			<div className='flex flex-col'>
				<MyInput
					htmlFor='title'
					labelText='Название:'
					id='title'
					type='text'
					value={book.title}
					onChange={handleFieldChanged('title')}
				/>
				<MyInput
					htmlFor='author'
					labelText='Автор:'
					id='author'
					type='text'
					value={book.author}
					onChange={handleFieldChanged('author')}
				/>
				<MyInput
					htmlFor='description'
					labelText='Описание:'
					id='description'
					type='text'
					value={book.description}
					onChange={handleFieldChanged('description')}
				/>
			</div>
			<MyButton onClick={addBook} text='Добавить' />
		</>
	)
}

export default AddBookForm
