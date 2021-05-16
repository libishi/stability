import { motion } from 'framer-motion'

export const FramerLoginOutter = props => {
	const Parent = {
		initial: {
			y: 0,
			opacity: 0,
		},
		last: {
			opacity: 1,

			transition: {
				duration: 5,
				delay: 0.5,
				when: 'beforeChildren',
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			transition: {
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.div
			className="text-motion-container"
			variants={Parent}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{props.children}
		</motion.div>
	)
}

export const FramerLoginInner = props => {
	const Child = {
		initial: {
			y: 10,
			opacity: 0,
		},
		last: {
			opacity: 1,

			transition: {
				duration: 5,
				delay: 2,
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			transition: {
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.div
			className="text-motion"
			variants={Child}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{props.children}
		</motion.div>
	)
}

export const FramerLogin = props => {
	const varia = {
		initial: {
			y: 100,
			opacity: 0,
		},
		last: {
			opacity: 1,

			transition: {
				delay: 0.5,
				duration: 3,
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			transition: {
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.div
			variants={varia}
			initial="initial"
			animate="last"
			exit="exit"
		>
			{props.children}
		</motion.div>
	)
}
