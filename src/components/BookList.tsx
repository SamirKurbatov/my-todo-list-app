import React, { FC } from 'react'
import { IBookListProps } from '../types/IBookListProps'
import BookItem from './BookItem'

const BookList: FC<IBookListProps> = ({ books }) => {
	return (
		<div className='flex flex-wrap justify-center'>
			{books.map((book, index) => (
				<BookItem key={index} book={book} />
			))}
		</div>
	)
}

export default BookList
