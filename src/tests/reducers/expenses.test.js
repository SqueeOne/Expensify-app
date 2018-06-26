import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: { 
            id: '99',
            description: 'Test',
            amount: 10000,
            note: '',
            cretedAt: moment(0).valueOf()
        }
    };
    const state = expensesReducer(expenses, action);
    const added = expenses.concat(action.expense);
    expect(state).toEqual(added);
});

test('should ediit expense by ID', () => {
    const amount = 1222000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not ediit expense if ID not found', () => {
    const amount = 1222000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});