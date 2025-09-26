import Contenido from "../components/Contenido";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758837156/image_68_ax9uk0.png"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758837156/image_68_ax9uk0.png"
        />
        <div className="contenido_text">
          <Contenido />
        </div>
      </div>
    </>
  );
}