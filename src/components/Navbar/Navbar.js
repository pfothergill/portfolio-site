import React from "react";
import {
    AppBar,
    CssBaseline,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";
import DrawerComponent from "./Drawer";
import CustomDarkModeToggle from "./CustomDarkModeToggle"

function Navbar() {
    // const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar className="MuiPaper-elevation4" position="static">
            <CssBaseline />
            {isMobile ? (
                <DrawerComponent />
            ) : (
                <div>
                    <div className="nav-container">
                        <div className="logo-container util-nav-container-left">
                            <Link className="logo-font logo" to="/">
                                {/* <img src="src/static/img/logo-transparent.png" /> */}
                                {/* <img className="logo-img" src="./logo-transparent.png" alt="pfothergill.com logo"/> */}

                                P|fothergill

                            </Link>
                        </div>

                        <div className="navbar">

                            <Link className="nav-item" to="/about">
                                About
                            </Link>
                            <Link className="nav-item" to="/contact">
                                Contact
                            </Link>
                            <Link className="nav-item" to="/faq">
                                FAQ
                            </Link>
                            <div className='nav-item toggle-container util-nav-container-right'>
                                <CustomDarkModeToggle />
                            </div>
                        </div>

                    </div>
                </div>
            )}
            <Outlet />
        </AppBar>
    );
}
export default Navbar;