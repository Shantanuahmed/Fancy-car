import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';



const Navigation = () => {
    const { user, logout } = useAuth();
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            color: 'white',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: "right"
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: 'black',

        }
    });
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();
    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} style={{ color: "pink", fontWeight: 800 }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Fancy World
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link className={navItem} to="/collection">
                                <Button color="inherit">Cars</Button>
                            </Link>
                            {
                                user?.email ?
                                    <Box style={{ display: 'inline' }}>
                                        <Link className={navItem} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </Link>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <Link className={navItem} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </Link>
                            }

                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/">Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/collection">Cars</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                {
                                    user?.email ?
                                        <Box>
                                            <ListItem button>
                                                <ListItemText>
                                                    <Link className={mobileNavItem} to="/dashboard">  Dashboard</Link>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText>
                                                    <Link className={mobileNavItem} to="/login"> <Button onClick={logout} color="inherit">Logout</Button></Link>
                                                </ListItemText>
                                            </ListItem>
                                        </Box>
                                        :
                                        <ListItem button>
                                            <ListItemText>
                                                <Link className={mobileNavItem} to="/login">Login</Link>
                                            </ListItemText>
                                        </ListItem>
                                }
                                <Divider />
                            </List>

                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;