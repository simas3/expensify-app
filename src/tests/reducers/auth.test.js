import authReducer from '../../reducers/auth'

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('should login ', () => {
    const action = {
        type: 'LOGIN',
        uid: 'afdfgaerthybgfv'
    }

    const state = authReducer({}, action)
    expect(state).toEqual({ uid: action.uid })
})

test('should logout ', () => {
    const action = {
        type: 'LOGOUT'
    }

    const state = authReducer({}, action)
    expect(state).toEqual({})
})

