import React, { FC } from 'react'
import { IBookProps } from '../types/IBookProps'

const BookInfo: FC<IBookProps> = ({
	image,
	title,
	author,
	createdDate,
	description,
}) => {
	return (
		<>
			<img
				className='rounded-lg max-w-full'
				src={image}
				alt='image is not found'
			/>
			<ul className='px-2'>
				<li>
					Название: <span>{title}</span>
				</li>
				<li>
					Автор: <span>{author}</span>
				</li>
				<li>
					Дата создания: <span>{createdDate}</span>
				</li>
				<li>
					Описание: <p>{description}</p>
				</li>
			</ul>
		</>
	)
}

export default BookInfo
