import { useEffect } from 'react'
import './App.scss'
import { useTelegram } from './hooks/useTelegram'
function App() {
	const { tg, user, onClose } = useTelegram()

	useEffect(() => {
		tg.ready()
	})

	return (
		<div className={'wrapper'}>
			<div className={'header'}>
				<div>Hello {user?.username}!</div>
				<div>
					<button onClick={onClose}>Закрыть WebApp</button>
				</div>
			</div>
			<div>TeleTeam - Telegram - WebApp</div>
		</div>
	)
}

export default App
