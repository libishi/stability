import Particles from 'react-particles-js'
const Particle = () => {
	return (
		<>
			<Particles
				className="particles"
				params={{
					particles: {
						line_linked: {
							shadow: {
								enable: true,
								color: '#183d88',
								blur: 1,
							},
						},
						number: {
							value: 90,
							density: {
								enable: true,
								value_area: 2000,
							},
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 1,
								color: '#183d88',
							},
						},
						size: {
							value: 2,
							random: true,
						},
					},
				}}
			/>
		</>
	)
}

export default Particle
