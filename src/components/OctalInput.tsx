import { useContext } from "react";

import { PermissionContext } from "../context/PermissionContext";

import styled from 'styled-components';

const Input = styled.input`
        background-color: #333;
        border: none;
        border-radius: 16px;
        text-decoration: none;
        text-align: center;
        font-size: 48px;
        font-family: 'Cascadia Code';
        outline: 0px;
        width: 100%;
        padding: 0;
        letter-spacing: 10px;
        margin-bottom: 1rem;
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        -moz-appearance: textfield;
    `;

export const OctalInput = () => {

    const { permission, handlePermission } = useContext(PermissionContext)

    const handleInput = async (e: any) => {
        if (e.target.value.length <= 3) {
            handlePermission!(e.target.value)
        }
        e.target.value = e.target.value.substr(0, 3)
    }

    return (
        <div>
            <Input
                type="number"
                name="octal"
                id="octal"
                min={0}
                maxLength={3}
                onChange={handleInput}
            />
        </div>
    );
}