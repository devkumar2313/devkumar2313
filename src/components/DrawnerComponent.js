import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
       
        fontWeight: 'bold',
        color:'Aqua'
    },
    bg: {
        backgroundColor:'grey',
        height:'100%'
    },
    icon: {
        color: "white"
    },
    link1: {
        fontWeight: 'bold',
        color: 'blueviolet'
    },
    link2: {
        fontWeight: 'bold',
        color: 'crimson'
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
               
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List className={classes.bg}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem  onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link className={classes.link1} to="/Passwordmaker">Passwords</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link className={classes.link2} to="/Contact">Contact</Link>
                        </ListItemText>
                    </ListItem>
                   
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <h1>Menu</h1>
            </IconButton>
        </>
    );
}
export default DrawerComponent;