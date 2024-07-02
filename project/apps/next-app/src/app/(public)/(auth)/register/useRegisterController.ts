import { Email, PasswordStrong } from '@repo/domain';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React, { useState, useEffect } from 'react';
import { GetErrorDescription } from '../../../../configurations/descriptionsErrors';


type UserViewModel = {
	name: string,
	email: string,
	password: string
}

export type RegisterViewModel = {
	isRequesting: boolean,
	formErrors: Errors
	RegisterUser: () => Promise<void>,
	setFormData: (userViewModel: UserViewModel) => void,
	isSubmitDisabled: boolean
	formData: UserViewModel
}

type useRegisterControllerProps = {
	router: AppRouterInstance
}
type Errors = {
	[key: string]: string | undefined
}

export function useRegisterController({ router }: useRegisterControllerProps): RegisterViewModel {
	const [isRequesting, setIsRequesting] = useState(false);
	const [formData, setFormData] = useState<UserViewModel>({
		name: '',
		email: '',
		password: ''
	})
	const [errors, setErrors] = useState<Errors>({
		name: undefined,
		email: undefined,
		password: undefined
	})
	useEffect(() => {
		const newErrors = GetErrors()
		setErrors(newErrors);
	}, [formData])

	function HasErrors(_errors: Errors): boolean {
		return Object.keys(_errors).some(key => _errors[key])
	}

	function GetErrors(): Errors {
		const errors: Errors = {
			name: undefined,
			email: undefined,
			password: undefined
		};
		if (!formData.name) {
			errors.name = "Nome é obrigatório"
		}
		errors.email = GetErrorDescription(Email.getErrorIfExists(formData.email)?.code)
		errors.password = GetErrorDescription(PasswordStrong.getErrorIfExists(formData.password)?.code)
		return errors
	}


	async function RegisterUser(): Promise<void> {
		setIsRequesting(true);
		const newErrors = GetErrors();
		if (!HasErrors(newErrors)) {
			try {
				await fetch('http://localhost:3000/api/users', {
					method: 'POST',
					body: JSON.stringify(formData)
				})
				router.push('/signin')
			} catch (error: any) {
				alert(error.message)
			}
		} else {
			setErrors(newErrors);
		}
		setIsRequesting(false)
	}
	return {
		isRequesting,
		RegisterUser,
		formErrors: errors,
		setFormData,
		isSubmitDisabled: HasErrors(errors) || isRequesting,
		formData
	}
}