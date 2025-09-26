import "../style/Contenido2.css";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";

export default function Contenido2() {
  const [currentSection, setCurrentSection] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "Mis papás lo hicieron posible, y yo quiero compartirlo contigo. ¡Estás invitado a la fiesta de mis XV años!";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 80);
      } else {
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    };
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <>
      <div className="contenido_text_info">
        <section
          className={`padres_dedicatoria_padrinos ${
            currentSection === 0 ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758729721/image-removebg-preview_k4xcqo.png"
            className="corona"
            alt=""
          />
          <div className="padres">
            <div className="tit_padres">
              <img
                src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758906672/image_69_xbwl0n.png"
                alt=""
              />
              <div className="text_padres">
                <p>Padres</p>
              </div>
            </div>
            <div className="padres_nombres">
              <p>Carlos González</p>
              <p>y</p>
              <p>María Torres</p>
            </div>
          </div>
          <div className="texto_invitacion mt-5">
            <div className="parrafo">
              <p className={`cursor ${showCursor ? "blinking-cursor" : ""}`}>
                {displayedText}
              </p>
            </div>
          </div>
          <div className="padrinos">
            <p>Con el cariño y el apoyo de mis padrinos:</p>
            <p>Luis Rodríguez y Ana María López</p>
          </div>
          <div className="buton_next">
            <Button label="Next" onClick={() => setCurrentSection(1)} />
          </div>
        </section>

        <section
          className={`direccion ${
            currentSection === 1 ? "fade-in" : "fade-out-hidden"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758729721/image-removebg-preview_k4xcqo.png"
            className="corona"
            alt=""
          />
          <div className="calendario">
            <h3>Reserva este día</h3>
            <div className="dia flex align-items-center">
              <div className="dia_semana">Martes</div>
              <div className="numero_dia">30</div>
              <div className="mes">Septiembre</div>
            </div>
          </div>
          <div className="Hora">
            <div className="ceremonia">
              <img
                src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758920651/image_70_farjer.png"
                alt=""
              />
              <h3>Ceremonia</h3>
              <p>10 A.M.</p>
              <div className="buton_direccion_ceremonia mt-2">
                <a
                  href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA"
                  target="_blank"
                >
                  <Button label="Ver Ubicación"></Button>
                </a>
              </div>
            </div>
            <div className="fiesta mt-4">
              <img
                src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758920650/image_71_himhcf.png"
                alt=""
              />
              <h3>Fiesta</h3>
              <p>7 P.M.</p>
              <div className="buton_direccion_ceremonia mt-2">
                <a
                  href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA"
                  target="_blank"
                >
                  <Button label="Ver Ubicación"></Button>
                </a>
              </div>
            </div>
          </div>
          <div className="buton_next">
            <Button label="Next" onClick={() => setCurrentSection(2)} />
          </div>
        </section>

        <section
          className={`confirmar_dress ${
            currentSection === 2 ? "fade-in" : "fade-out-hidden"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758729721/image-removebg-preview_k4xcqo.png"
            className="corona"
            alt=""
          />
          <div className="buton_confirmar_asistencia">
            <img
              src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758920648/image_72_wdgm84.png"
              alt=""
            />
            <h3>Confirmar Asistencia</h3>
            <div className="button_whatsapp">
              <a
                href="https://wa.me/51950874416?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20fiesta."
                target="_blank"
              >
                <Button
                  label="Confirmar"
                  onClick={() => console.log("Confirmado")}
                />
              </a>
            </div>
          </div>
          <div className="dress_code mt-5">
            <img src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758732604/image_63_re7hei.svg" alt="" />
            <h3>Dress Code</h3>
            <p>Formal - Elegante</p>
          </div>

          <div className="mensaje">
            <p>AMABLEMENTE, EL COLOR DORADO Y BLANCO UNICAMENTE PARA LA QUINCEAÑERA.</p>
          </div>
        </section>
      </div>
    </>
  );
}
