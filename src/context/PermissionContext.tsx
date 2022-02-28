import { createContext, useContext, useState } from "react";

interface IPermissionContext {
    permission: string;
    handlePermission?: (value: string) => void;
}


export const PermissionContext = createContext({} as IPermissionContext)

export const usePermissionContext = () => useContext(PermissionContext)

export const PermissionProvider = ({ children }: any) => {
    const [permission, setPermission] = useState('');

    const handlePermission = (value: string) => {
        setPermission(value)
    }
    return (
        <PermissionContext.Provider
            value={{
                permission,
                handlePermission
            }}
        >
            {children}
        </PermissionContext.Provider>
    )
}