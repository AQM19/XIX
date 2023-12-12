export interface UIState {
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
}

import React, { FC, useReducer, PropsWithChildren } from 'react'
import { UIContext, uiReducer } from '.';

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: 'Ui - ToggleMenu' })
    }

    return (
        <UIContext.Provider value={{
            ...state,
            toggleSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}