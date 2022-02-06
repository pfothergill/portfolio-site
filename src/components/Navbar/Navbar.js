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
                    <div className="navbar">
                        <Link className="logo nav-item" to="/">
                            PFOTHERGILL
                        </Link>
                        <Link className="nav-item" to="/about">
                            About
                        </Link>
                        <Link className="nav-item" to="/contact">
                            Contact
                        </Link>
                        <Link className="nav-item util-margin-right-2" to="/faq">
                            FAQ
                        </Link>
                        <CustomDarkModeToggle />
                    </div>
                </div>
            )}
            <Outlet />
        </AppBar>
    );
}
export default Navbar;