import produce from 'immer'
import React, { useState, useReducer } from 'react'
import IAccountDto from '../../../interfaces/IAccountDto'

export interface IStore {
    data: IAccountDto[],
}

export const getInitState = (): IStore => {
    return { data: [] }
}

export type AccountsAction =
    | { type: 'full', payload: IAccountDto[] }
    | { type: 'update', payload: IAccountDto }

export type AccountsDispatch = (action: AccountsAction) => void

export const AccountsReducer = (state: IStore, action: AccountsAction): IStore => {
    switch (action.type) {
        case "full":
            const newItems = action.payload.sort((a, b) => b.createdAt - a.createdAt)
            return { data: newItems }
        case "update":
            const nextState = produce(state, draft => {
                let obj = draft.data.find(value => value.id === action.payload.id)
                if (obj) {
                    obj.role = action.payload.role
                }
            })
            return nextState
        default:
            throw new Error('Unhandled action type');
    }
}
