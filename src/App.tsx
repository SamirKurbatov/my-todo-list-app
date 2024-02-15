import React, { useState } from 'react'
import './App.css'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import MyModal from './components/UI/Modal/MyModal'
import MyButton from './components/UI/MyButton'
import BookListData from './data/BookListData'

function App() {
	let bookData = new BookListData()
	let initialBooks = bookData.getBookList().books
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [books, setBooks] = useState(initialBooks)

	return (
		<>
			<div>
				<div className='flex justify-between items-center pr-8 px-8'>
					<h1 className='font-normal'>Книги</h1>
					<MyButton onClick={() => setIsModalOpen(true)} text='Добавить' />
				</div>
				<MyModal isActive={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<AddBookForm books={books} setBooks={setBooks} />
				</MyModal>
				<BookList books={books} />
			</div>
		</>
	)
}

export default App
