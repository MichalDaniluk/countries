import { createReducer,Action } from '@ngrx/store';
import { Country } from '../types/country.interface';

export interface CountriesState {
	countries: Country[]
}

const initialState:CountriesState = {
	countries: [
		{
			name:'Test',
			flags:{
				png:''
			}
		}
	]
}

const _countriesReducer = createReducer(
	initialState
)

export function countriesReducer(state:CountriesState | undefined, action: Action) {
	return _countriesReducer(state, action)
}
