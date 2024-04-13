import { atom } from 'recoil'

export const Balance = atom({
    key : "balance",
    default : 0
})

export const Income = atom({
    key : "income" ,
    default : 0
})

export const Expense = atom({
    key : "expense",
    default : 0
})