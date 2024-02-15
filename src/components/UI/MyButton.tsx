import React from 'react'

const MyButton = ({ text, onClick }) => {
	return (
		<button
			className='p-5 border-2 border-none rounded-xl bg-green-900 hover:bg-green-800 transition-all'
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default MyButton
