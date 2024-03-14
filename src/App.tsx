import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Main from './components/Main/Main'
import UpdateTask from './components/Task/UpdateTask'
import { useTelegram } from './hooks/useTelegram'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/updateTask',
				element: <UpdateTask />,
			},
		],
	},
])

function App() {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	})

	return (
		<div className={'wrapper'}>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
