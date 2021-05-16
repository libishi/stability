import Image from '../../styles/images/last.jpg'

const EdaLoader = () => {
	return (
		<div className="spinner-screen-center">
			<img alt="company logo" className="pulse" src={Image} />
		</div>
	)
}

export default EdaLoader
