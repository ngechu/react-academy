import { BASE_URL } from "../utils/config";


const getUsers = async () => {
	const response = await fetch(`${BASE_URL}/users`)
	const data = await response.json()
	return data
}
export default getUsers;