import axios from 'axios';

export const get = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/albums',
		);
		return response.data;
	} catch (e) {
		return { e };
	}
};

export const post = async (newData) => {
	try {
		const response = await axios.post(
			'https://jsonplaceholder.typicode.com/albums',
			newData,
		);
		return response.data;
	} catch (e) {
		return { e };
	}
};

export const update = async (id, updatedData) => {
	try {
		const response = await axios.put(
			`https://jsonplaceholder.typicode.com/albums/${id}`,
			updatedData,
		);
		return response.data;
	} catch (e) {
		return { e };
	}
};

export const del = async (id) => {
	try {
		const response = await axios.delete(
			`https://jsonplaceholder.typicode.com/albums/${id}`,
		);
		return response.data;
	} catch (e) {
		return { e };
	}
};
