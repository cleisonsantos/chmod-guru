import { usePermissionContext } from "../context/PermissionContext";

import styled from "styled-components";

const Table = styled.table`
    width: auto;
    thead {
        border-bottom: 1px #e8e6e3 solid;
    }
    td th {
        margin: 0px 40px;
        
    }
`

export const PermissionTable = () => {

    const { permission } = usePermissionContext()

    let permissionsDescription: string[] = [];
    permissionsDescription['0'] = 'Nenhuma Permissão';
    permissionsDescription['1'] = 'Somente executar';
    permissionsDescription['2'] = 'Somente gravar';
    permissionsDescription['3'] = 'Escrever e executar';
    permissionsDescription['4'] = 'Somente ler';
    permissionsDescription['5'] = 'Ler e Executar';
    permissionsDescription['6'] = 'Ler e gravar';
    permissionsDescription['7'] = 'Permissão total';
    permissionsDescription['8'] = 'Invalido';
    permissionsDescription['9'] = 'Invalido';


    const renderPermissions = (p: any) => {
        return permissionsDescription[p]
    }

    return (
        <div>
            <Table >
                <thead>
                    <tr>
                        <th style={{textAlign: 'right'}}>
                            {permission[0]}
                        </th>
                        <th style={{textAlign: 'center'}}>
                            Proprietário
                        </th>
                        <td style={{textAlign: 'right'}}>
                            {renderPermissions(permission[0])}
                        </td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'right'}}>
                            {permission[1]}
                        </th>
                        <th style={{textAlign: 'center'}}>
                            Grupo
                        </th>
                        <td style={{textAlign: 'right'}}>
                            {renderPermissions(permission[1])}
                        </td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'right'}}>
                            {permission[2]}
                        </th>
                        <th style={{textAlign: 'center'}}>
                            Outros
                        </th>
                        <td style={{textAlign: 'right'}}>
                            {renderPermissions(permission[2])}
                        </td>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}