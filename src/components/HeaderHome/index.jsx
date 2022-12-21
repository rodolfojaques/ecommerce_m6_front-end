import { Link } from "react-router-dom";
import { Button } from "../Button";
import { StyleHeaderHome } from "./style";


function HeaderHome(){
    return (
        <StyleHeaderHome>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
            <div>
                <Link to="/carros">
                    <Button
                        border = "var(--color-whiteFixed)"
                        color = "var(--color-whiteFixed)"
                        >
                        Carros
                    </Button>
                </Link>
                <Link to="/motos">
                    <Button
                        border = "var(--color-whiteFixed)"
                        color = "var(--color-whiteFixed)"
                        >
                        Motos
                    </Button>
                </Link>
            </div>
        </StyleHeaderHome>
    )
}

export { HeaderHome };