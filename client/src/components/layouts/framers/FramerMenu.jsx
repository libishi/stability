import { motion } from 'framer-motion'

const FramerMenu = props => {
	const switchVariants = {
		initial: {
			// y: -100,
			scale: 0.5,
			opacity: 0,
		},
		last: {
			// y: 0,
			scale: 1,
			opacity: 1,

			transition: {
				// flip: Infinity,
				duration: 2.0,
			},
		},
		// exit: {
		// 	x: 100,
		// 	opacity: 0,
		// 	transition: {
		// 		duration: 0.5,
		// 		ease: 'easeIn',
		// 	},
		// },
	}

	return (
		<motion.div
			variants={switchVariants}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{props.children}
		</motion.div>
	)
}

export default FramerMenu
