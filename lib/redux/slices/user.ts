import { createSlice } from '@reduxjs/toolkit'

interface initialStateProps {
    profile: {
        _id: string
        email: string
        password: string
        firstName: string | null
        lastName: string | null
        token: string | null
        passwordResetToken: string | null
    }
    loading: boolean
}

const initialState = {
    profile: {
        _id: '',
        email: '',
        password: '',
        firstName: null,
        lastName: null,
        token: null,
        passwordResetToken: null
    },
    loading: false
} as initialStateProps

export const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.loading = false
            state.profile = action.payload
        },
        startLoading: state => {
            state.loading = true
        }
    }
})

export default userSlice.reducer