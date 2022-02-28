import { usePermissionContext } from "../context/PermissionContext";

import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    margin: 10px;
    thead {
        border-bottom: 1px #e8e6e3 solid;
    }
    td th {
        margin: 20px;
        
    }
`

export const PermissionTable = () => {

    const { permission, handlePermission } = usePermissionContext()

    return (
        <div>
            <Table >
                <thead>
                    <tr>
                        <th>
                            {permission[0]}
                        </th>
                        <th>
                            Proprietário
                        </th>
                        <td>
                            permissões do propietário
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {permission[1]}
                        </th>
                        <th>
                            Grupo
                        </th>
                        <td>
                            permissões do grupo
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {permission[2]}
                        </th>
                        <th>
                            Outros
                        </th>
                        <td>
                            outras permissões
                        </td>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}