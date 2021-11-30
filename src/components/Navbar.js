import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawnerComponent";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(20),
        
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
   
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "crimson",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div >
            <AppBar position="static">
            <CssBaseline  />
                <Toolbar >
                <Typography variant="h4" className={classes.logo}>
                    Blanker

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                        <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/Passwordmaker" className={classes.link}>
                            Password Generator
                        </Link>
                        <Link to="/Contact" className={classes.link}>
                            Contact
                        </Link>
                    
                    </div>
                )}
            </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;