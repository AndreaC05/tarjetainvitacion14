import "../style/Contenido.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function Contenido() {
  return (
    <>
      <div className="container_contenido">
        <div className="text">
          <div className="text_xv">
            <h2>Mis XV años</h2>
          </div>
          <div className="nombre">
            <h1>Andrea Celeste</h1>
          </div>
        </div>
        <div className="buton_next">
          <Link to="/info">
            <Button label="Next"></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
