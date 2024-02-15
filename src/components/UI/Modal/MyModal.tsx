import React from 'react'

const MyModal = ({ isActive, onClose, children }) => {
	return (
		<>
			{isActive && (
				<div
					onClick={() => onClose()}
					className='fixed top-0 right-0 bottom-0 left-0 w-full h-full z-10 overflow-hidden overflow-y-auto backdrop-brightness-75'
				>
					<div
						onClick={e => e.stopPropagation()}
						className='absolute top-0 left-0 flex justify-center items-center w-full min-h-full'
					>
						<div className='relative m-4 w-full max-w-2xl rounded-xl bg-zinc-900 p-5 translate-y-5 z-20'>
							<button
								className='absolute top-0 right-0 w-7 h-7 text-xl bg-transparent'
								onClick={() => onClose()}
							>
								X
							</button>
							{children}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default MyModal
