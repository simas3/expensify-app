import configureMockStore from 'redux-mock-store'
import { login, logout } from '../../actions/auth'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import { database } from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])


test('should login action', () => {
    const uid = '123'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    })
})

test('should logout action', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})





