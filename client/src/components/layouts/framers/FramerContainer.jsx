import { motion } from 'framer-motion'

const container = {
	initial: {
		opacity: 0,
		y: 20,
		transition: {
			staggerChildren: 0.5,
		},
	},
	last: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},

	exit: {
		opacity: 0,
		y: -20,
		transition: {
			duration: 0.6,
			ease: 'easeInOut',
		},
	},
}

export const FramerContainer = ({ children, calcHeight, reset }) => {
	// const cardRef = React.useRef(null)

	// React.useEffect(() => {
	// 	calcHeight(cardRef.current?.parentElement.scrollHeight)
	// }, [calcHeight, cardRef])

	return (
		<motion.div
			// ref={cardRef}
			// onAnimationEndCapture={reset}
			variants={container}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}
