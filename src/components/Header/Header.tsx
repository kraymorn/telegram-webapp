import { useTelegram } from '../../hooks/useTelegram'
import './Header.scss'

const Header = () => {
	const { user, onClose } = useTelegram()

	return (
		<div className={'header'}>
			<div>Hello {user?.username}!</div>
			<div>
				<button onClick={onClose}>Закрыть WebApp</button>
			</div>
		</div>
	)
}

export default Header
