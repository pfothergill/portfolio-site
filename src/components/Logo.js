import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link className="logo-link" to="/">
            <div className="logo-container-2">
                <div className="logo-font-1">P</div>
                <div className="logo-font-2 util-margin-left-1">fothergill</div>
            </div>
        </Link>
    );
}
