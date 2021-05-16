import { motion } from 'framer-motion'

export const FramerItem = ({ children, delay }) => {
	const item = {
		initial: {
			y: 40,
			opacity: 0,
		},
		last: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.6,
			},
		},

		exit: {
			opacity: 0,
			y: -20,

			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.div
			variants={item}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}
