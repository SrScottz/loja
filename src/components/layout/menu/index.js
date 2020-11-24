import React from 'react'
import { Header, MenuItem, IconMenu } from './style';

export default function Menu() {
    const [hover, setHover] = React.useState(false);
    return (
        <Header>
            <MenuItem>
                <IconMenu>DS</IconMenu>
                <span>Dashboard</span>
            </MenuItem>
            <MenuItem>
                <IconMenu>CF</IconMenu>
                <span>Configurações</span>
            </MenuItem>
            <MenuItem>
                <IconMenu>PS</IconMenu>
                <span>Produtos</span>
            </MenuItem>
            <MenuItem>
                <IconMenu>ET</IconMenu>
                <span>Estoque</span>
            </MenuItem>
        </Header>
    )
}
