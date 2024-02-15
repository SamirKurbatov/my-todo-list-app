import { IBookListProps } from '../types/IBookListProps'

class BookListData {
	private bookList: IBookListProps

	constructor() {
		this.bookList = {
			books: [
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
					description: 'dasdsaad',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
				{
					image:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/T25-011.jpg/270px-T25-011.jpg',
					title: 'Фотоаппарат',
					author: 'Я',
				},
			],
		}
	}

	getBookList(): IBookListProps {
		return this.bookList
	}
}

export default BookListData
