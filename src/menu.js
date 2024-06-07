import { useState, useEffect } from 'react';
import { get, post, update, del } from './store';
import './menu.css';

export const Menu = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await get();
			setData(result);
		};

		fetchData();
	}, []);

	const handleAdd = async () => {
		const title = prompt('Enter title:');
		if (title) {
			const newItem = await post({ title, userId: 1 });
			setData((prevData) => [...prevData, newItem]);
		}
	};

	const handleUpdate = async (id) => {
		const newTitle = prompt('Enter new title:');
		if (newTitle) {
			const updatedItem = await update(id, newTitle);
			setData((prevData) =>
				prevData.map((item) =>
					item.id === id ? { ...item, title: updatedItem.title } : item,
				),
			);
		}
	};

	const handleDelete = async (id) => {
		await del(id);
		setData((prevData) => prevData.filter((item) => item.id !== id));
	};

	return (
		<>
			<i
				class='fa-solid fa-plus'
				onClick={() => handleAdd()}></i>
			{data.map((item) => (
				<div
					className='body'
					key={item.id}>
					{item.title}
					<div className='icons'>
						<i
							class='fa-solid fa-pen'
							onClick={() => handleUpdate(item.id)}></i>
						<i
							class='fa-solid fa-trash '
							onClick={() => handleDelete(item.id)}></i>
					</div>
				</div>
			))}
		</>
	);
};
