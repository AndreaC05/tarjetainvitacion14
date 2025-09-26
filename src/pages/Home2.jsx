import Contenido2 from "../components/Contenido2";
import "../style/Home.css";

export default function Home2() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758835841/descarga_3_lf01iv.jpg"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758835841/descarga_3_lf01iv.jpg"
        />
        <div className="contenido_text">
          <Contenido2 />
        </div>
      </div>
    </>
  );
}