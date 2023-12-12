import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AdminPanelSettings, CategoryOutlined, EscalatorWarningOutlined, FemaleOutlined, MaleOutlined, SearchOutlined } from "@mui/icons-material"
import { useContext } from "react";
import { UIContext } from "@/context/ui";
import { useRouter } from "next/router";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';

export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext(UIContext);

    const navigateTo = (url: string) => {
        toggleSideMenu();
        router.push(url);
    };

    return (
        <Drawer
            open={isMenuOpen}
            onClose={toggleSideMenu}
            anchor='left'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>
                    {/* <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem> */}

                    <ListItem
                        button
                        onClick={() => navigateTo('/#Index')}>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Index'} />
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigateTo('/#Projects')}>
                        <ListItemIcon>
                            <DesktopMacOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Proyectos'} />
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigateTo('/#Contact')}>
                        <ListItemIcon>
                            <RecentActorsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Contacto'} />
                    </ListItem>

                    {/* Admin */}
                    {/* <Divider />
                    <ListSubheader>Admin Panel</ListSubheader>

                    <ListItem button>
                        <ListItemIcon>
                            <CategoryOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Proyectos'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <AdminPanelSettings />
                        </ListItemIcon>
                        <ListItemText primary={'Programadores'} />
                    </ListItem> */}
                </List>
            </Box>
        </Drawer>
    )
}