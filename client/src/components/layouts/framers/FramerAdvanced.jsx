import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const forward = {
	initial: {
		x: -200,
	},
	last: {
		x: 0,
		position: 'absolute',

		transition: {
			duration: 0.5,
		},
	},

	exit: {
		x: -200,
		transition: {
			duration: 0.5,
		},
	},
}

export const backward = {
	initial: {
		x: 200,
	},
	last: {
		x: 0,
		position: 'absolute',

		transition: {
			duration: 0.5,
		},
	},

	exit: {
		x: 200,
		transition: {
			duration: 0.5,
		},
	},
}

export const FramerDropMenu = ({
	children,
	variants,
	calcHeight,
}) => {
	const dropDownRef = useRef(null)

	useEffect(() => {
		const height = dropDownRef.current?.offsetHeight
		calcHeight(height)
	}, [dropDownRef, calcHeight])

	return (
		<motion.div
			ref={dropDownRef}
			variants={variants}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}
