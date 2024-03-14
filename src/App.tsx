import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'

function App() {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	})

	return (
		<div className={'wrapper'}>
			<Header />
			<Routes>
				<Route index element={<div>TeleTeam - Telegram - WebApp</div>} />
				<Route path={'/form'} element={<div>Форма редактирования</div>} />
			</Routes>
		</div>
	)
}

export default App
