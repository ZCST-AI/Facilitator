import "./register";

import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import "./index.css";
import "./index.sass";

import { GlobalTheme } from "@carbon/react";
import { Wizard } from "./components/Wizard";
import { NotFound } from "./components/NotFound";

export function App() {
    return (
        <LocationProvider>
            <GlobalTheme>
                <main>
                    <Router>
                        <Route path="/wizard" component={Wizard} />
                        <Route default component={NotFound} />
                    </Router>
                </main>
            </GlobalTheme>
        </LocationProvider>
    );
}

render(<App />, document.getElementById("app")!);
