'use client';

import { apiLogin, apiLogout } from '@/app/actions/user';
import { useRouter } from 'next/navigation';

const { createContext, useState } = require('react');

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const { push } = useRouter();

	const login = async credenciais => {
		console.log(credenciais);
		await apiLogin(credenciais);

		setUser({
			nome: 'flavio',
			email: 'flaviozorzetto@fiap.com.br',
		});
		push('/');
	};
	const logout = () => {
		apiLogout();
		setUser(null);
		push('/login');
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
