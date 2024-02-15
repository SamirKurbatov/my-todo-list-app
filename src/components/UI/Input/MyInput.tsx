import React from 'react'

const MyInput = props => {
	return (
		<>
			<label htmlFor={props.htmlFor}>{props.labelText}</label>
			<input
				className='w-full m-2 p-1 rounded-lg'
				id={props.id}
				type={props.type}
				value={props.value}
				onChange={props.onChange}
			/>
		</>
	)
}

export default MyInput
