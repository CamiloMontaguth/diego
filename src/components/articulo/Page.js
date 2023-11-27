import React from "react";
import Inicio from "../inicio/index";
import { Route } from 'react-router-dom';

export default function Page() {
    return (
        <section>
            <Route path="/" element={Inicio} />
        </section>
    );
}
