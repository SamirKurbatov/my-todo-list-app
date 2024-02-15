import React, { FC } from 'react'
import { IBookItemProps } from '../types/IBookItemProps'
import Book from './BookInfo'

const BookItem: FC<IBookItemProps> = ({ book }) => {
	return (
		<div className='m-2 p-1 w-128 h-128 border-1 border-t-black rounded-lg shadow-black shadow-lg'>
			<Book {...book} />
		</div>
	)
}

export default BookItem
