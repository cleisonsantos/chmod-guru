import { useState } from "react";
import styled from 'styled-components';

const Input = styled.input`
        background-color: #333;
        border: none;
        border-radius: 8px;
        font-size: 20px;
    `;

export function OctalInput() {

    const [permission, setPermission] = useState<string>('')

    const handleInput = async (e: any) => {
        if (e.target.value.length <= 3) {
            setPermission(e.target.value)
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
            <br />
            {permission}
        </div>
    );
}