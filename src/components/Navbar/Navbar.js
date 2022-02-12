import React from "react";
import {
    AppBar,
    CssBaseline,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";
import DrawerComponent from "./Drawer";
import CustomDarkModeToggle from "./CustomDarkModeToggle";
import "../../styles/style.scss";
import Logo from "../Logo";

function Navbar() {
    // const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div className="row header">
            <AppBar className="MuiPaper-elevation4" position="static">
                <CssBaseline />
                {isMobile ? (
                    <div className="nav-drawer">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="drawer-toggle">
                            <CustomDarkModeToggle size={50} />
                        </div>
                        <DrawerComponent />
                    </div>
                ) : (
                    <div>
                        <div className="nav-container">
                            <div className="logo-container util-nav-container-left">
                                <Logo />
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
                                <div className="nav-item toggle-container util-nav-container-right">
                                    <CustomDarkModeToggle size={60} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Outlet />
            </AppBar>
        </div>
    );
}
export default Navbar;
