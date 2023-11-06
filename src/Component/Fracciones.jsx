import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Encabezado from "./Encabezado";
import "../styles/indice.css";
import { MathComponent } from "mathjax-react";

function Fracciones() {
  return (
    <>
      <EncabezadoPrincipal />
      <Encabezado />

      <div className="tema-principal">
          <div className="indice">
            <h2>Índice</h2>
            <ul>
              <div id="tabla-contenido">
                <li>
                  {" "}
                  <a href="#Qué_es_la_resta">¿Qué son las fracciones?</a>
                </li>
                <a href="#Qué_es_la_resta"></a>
                <li>
                  <a href="#Qué_es_la_resta"> </a>
                  <a href="#Partes_de_la_resta">Tipos de fracciones</a>
                </li>
                <a href="#Partes_de_la_resta"></a>
                <li>
                  <a href="#Partes_de_la_resta"> </a>
                  <a href="#Propiedades_de_la_resta">Operaciones con fracciones</a>
                </li>
                <a href="#Propiedades_de_la_resta"></a>
                <li>
                  <a href="#Propiedades_de_la_resta"> </a>
                  <a href="#Resolver_una_resta">Lectura de fracciones</a>
                </li>
                <a href="#Resolver_una_resta"></a>
                <li>
                  <a href="#Resolver_una_resta"> </a>
                </li>
              </div>
              <div className="ancla-indice"></div>
            </ul>
          </div>
          <div className="principal-contenedor">
          <h1 id="">FRACCIONES</h1>
          <span>
            Las fracciones son un tipo de número que se utiliza para representar
            la cantidad de partes que se toman de un entero que ha sido dividido
            en porciones iguales.
          </span>
          <hr />
          <div>
          <div className="tema-resta">
            <h2>¿QUE SON LAS FRACCIONES?</h2>
            <span>
              <br />
              Una fracción es un tipo de número que pertenece al conjunto de los
              números racionales (Q) y se usa para representar la cantidad de
              partes que se toman de un entero que ha sido dividido en porciones
              iguales. Una fracción es del tipo{" "}
              <MathComponent tex={String.raw`a/b`} display={false} /> y está
              formada por varios elementos, estos son:
            </span>
            <ul>
              <li>
                <br />
                <span><strong>Numerador:</strong> es el número que se encuentra en la
                parte superior de la fracción y representa la cantidad de partes
                que se toman del entero.
                </span>
              </li>
              <li>
                <br />
                <span><strong>Denominador:</strong> es el número que se encuentra en
                la parte inferior de la fracción y representa la cantidad de
                partes iguales en que se ha dividido el entero.</span>
              </li>
              <li>
                <br />
                <span><strong>Fracción:</strong> es el resultado de dividir el entero
                en partes iguales y tomar una cantidad de ellas.</span>
              </li>
            </ul>
            <span>
              Por ejemplo, si se tiene la fracción{" "}
              <MathComponent tex={String.raw`5/7`} display={false} /> , el
              denominador es el 7, que indica que el entero o la unidad se han
              dividido en 7 partes iguales y el 5 es el numerador, que
              representa el número de partes que se han tomado. De manera
              gráfica se representa como se muestra a continuación:
            </span>
            <br />
            <img src="images/uploads/fraccion1.png" alt="" />
            <br />
            <span>
              Para graficar un número fraccionario se utilizan, por lo general,
              figuras geométricas planas, las divisiones deben ser siempre en
              partes iguales. Ahora, qué sucede si se tiene la fracción{" "}
              <MathComponent tex={String.raw`9/5`} display={false} /> , Esta
              fracción refiere que se debe dividir la unidad en 5 partes iguales
              y tomar 9 de ellas:
            </span>
            <br />
            <img src="images/uploads/fraccion2.png" alt="" />
            <br />
            <span>
              Se observa, que una sola figura no es suficiente para tomar las 9
              partes iguales que indica el numerador. Para este caso, se hace
              necesario agregar otra figura, dividirla en la misma cantidad de
              partes que indica el denominador y tomar las 4 porciones que
              faltarían para completar el 9 que indica el numerador. Quedaría de
              la siguiente manera:
            </span>
            <br />
            <img src="images/uploads/fraccion3.png" alt="" />
          </div>
          <div>
            <h2 id="Partes_de_la_resta">TIPOS DE FRACCIONES</h2>
            <span>
              Existen varios tipos de fracciones y estas se clasifican en:
            </span>
            <ul>
              <li>
                <br />
                <span><strong>Fracciones propias:</strong>estas representan menos de
                una unidad. En este tipo de fracción el numerador es menor que
                el denominador, donde{" "}
                <MathComponent tex={String.raw`a<b`} display={false} />. Por
                ejemplo: <MathComponent tex={String.raw`1/2`} display={false} />{" "}
                , <MathComponent tex={String.raw`3/4`} display={false} /> ,{" "}
                <MathComponent tex={String.raw`5/6`} display={false} /> , etc.</span>
                <br />
                <img src="images/uploads/fraccion4.png" alt="" />
              </li>
              <li>
                <span><strong>Fracciones impropia:</strong> estas representan más de
                una unidad. En este tipo de fracción el numerador es mayor que
                el denominador, donde{" "}
                <MathComponent tex={String.raw`a>b`} display={false} />. Por
                ejemplo: <MathComponent tex={String.raw`3/2`} display={false} />{" "}
                , <MathComponent tex={String.raw`5/4`} display={false} /> ,{" "}
                <MathComponent tex={String.raw`7/6`} display={false} /> , etc.</span>
                <br />
                <img src="images/uploads/fraccion5.png" alt="" />
              </li>
              <li>
                <span><strong>Fracciones mixtas:</strong> estas representan una unidad
                y una parte de otra. En este tipo de fracción el numerador es
                mayor que el denominador, donde{" "}
                <MathComponent tex={String.raw`a>b`} display={false} />. Por
                ejemplo: <MathComponent tex={String.raw`3/2`} display={false} />{" "}
                , <MathComponent tex={String.raw`5/4`} display={false} /> ,{" "}
                <MathComponent tex={String.raw`7/6`} display={false} /> , etc.</span>
                <br />
                <img src="images/uploads/fraccion6.png" alt="" />
              </li>
              <li>
                <span><strong>Fracciones decimales:</strong> son aquellas fracciones
                donde el denominador es una potencia de 10. (10, 100,1000,…). La
                fracción {3}/{10} es una fracción decimal. Su representación
                gráfica es:</span>
                <br />
                <img src="/images/uploads/fraccion7.png" alt="" />
              </li>
            </ul>
          </div>
          <div>
            <h2 id="Propiedades_de_la_resta">OPERACIONES CON FRACCIONES</h2>
            <span>
              Como en cualquier conjunto de números, con las fracciones se
              pueden realizar las diferentes operaciones matemáticas básicas,
              suma resta, multiplicación y división.
            </span>
            <ul>
              <li>
                <br />
                <span><strong>Suma de fracciones:</strong> La suma de fracciones
                consiste en combinar dos o más fracciones para obtener como
                resultado una fracción equivalente. El método para sumar
                fracciones, dependerá de si estas son homogéneas o heterogéneas,
                es decir; si tienen igual o diferente denominador.</span>
                <br />
                <ul>
                  <br />
                  <ol>
                    <span><strong>Suma de fracciones de igual denominador:</strong>{" "}
                    para sumar dos o más fracciones que tienen el mismo
                    denominador, simplemente se deben sumar los numeradores y se
                    mantiene el mismo denominador. Ejemplo.</span>
                    <br />
                    <img src="images/uploads/fraccion8.png" alt="" />
                  </ol>
                  <br />
                  <ol>
                    <span><strong>
                      Suma de fracciones de diferente denominador:
                    </strong>{" "}
                    existen varios métodos de sumar fracciones de diferente
                    denominador, uno de ellos es el conocido como
                    “multiplicación en cruz” y se expresa mediante: <br /></span>
                    <br />
                    <img src="images/uploads/fraccion9.png" alt="" />
                  </ol>
                </ul>
              </li>
              <li>
                <span><strong>Resta de fracciones:</strong> El procedimiento para
                restar fracciones es similar al de la suma, ya sea para
                fracciones de igual o diferente denominador.</span>
                <br />
                <ul>
                  <br />
                  <ol>
                    <span><strong>Resta de fracciones de igual denominador:</strong>{" "}
                    para restar dos o más fracciones que tienen el mismo
                    denominador, simplemente se deben restar los numeradores y
                    se mantiene el mismo denominador. Ejemplo.</span>
                    <br />
                    <img src="images/uploads/fraccion10.png" alt="" />
                  </ol>
                  <br />
                  <ol>
                    <span><strong>
                      Resta de fracciones de diferente denominador:
                    </strong>{" "}
                    existen varios métodos de restar fracciones de diferente
                    denominador, uno de ellos es el conocido como
                    “multiplicación en cruz” y se expresa mediante:</span>
                    <br />
                    <img src="images/uploads/fraccion11.png" alt="" />
                  </ol>
                </ul>
              </li>
              <li>
                <span><strong>Multiplicación de fracciones:</strong> La multiplicación
                de fracciones consiste en combinar dos o más fracciones para
                obtener como resultado una fracción equivalente. El método para
                multiplicar fracciones, es sencillo, se multiplican los
                numeradores y se multiplican los denominadores. Ejemplo.</span>
                <br />
                <img src="images/uploads/fraccion12.png" alt="" />
              </li>
              <li>
                <span><strong>División de fracciones:</strong> La división de
                fracciones consiste en combinar dos o más fracciones para
                obtener como resultado una fracción equivalente. El método para
                dividir fracciones, es sencillo, se multiplica el numerador de
                la primera fracción por el denominador de la segunda fracción y
                se divide por el producto del denominador de la primera fracción
                por el numerador de la segunda fracción. Ejemplo.</span>
                <br />
                <img src="images/uploads/fraccion13.png" alt="" />
              </li>
            </ul>
            <div>
              <h2 id="Resolver_una_resta">LECTURA DE FRACCIONES</h2>
              <span>
                Para leer una fracción, primeramente se nombra el numerador de
                la misma manera como está escrito (1, 2, 3, 8,…), como un número
                cardinal, luego se menciona el denominador, que se lee con los
                números partitivos. Cuando el denominador está comprendido entre
                los número 2 y 10, se utiliza:
              </span>
              <br />
              <img src="images/uploads/fraccion14.png" alt="" />
              <br />
              <span>Cuando el denominador es igual o mayor a 11 se utiliza la terminación “avos”, entonces el denominador se leería; onceavos, doceavos, treceavos, veinteavos. <br /> </span>
            </div>
          </div>
          </div>
        </div>
        <br />
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FUbla-rPt3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>    
        <div className="pie">
          <button>
            <Link to={"/aprende-conmigo/quizz"}>SIGUIENTE</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Fracciones;
