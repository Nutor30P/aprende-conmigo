import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Encabezado from "./Encabezado";
import "../styles/indice.css";
import { MathComponent } from "mathjax-react";
function Resta() {
  return (
    <>
      <EncabezadoPrincipal />
      <Encabezado />

      <div className="tema-principal">
        <div>
          <div className="indice">
            <h2>Índice</h2>
            <ul>
              <div id="tabla-contenido">
                <li>
                  {" "}
                  <a href="#Qué_es_la_resta">¿Qué es la resta?</a>
                </li>
                <a href="#Qué_es_la_resta"></a>
                <li>
                  <a href="#Qué_es_la_resta"> </a>
                  <a href="#Partes_de_la_resta">Partes de la resta</a>
                </li>
                <a href="#Partes_de_la_resta"></a>
                <li>
                  <a href="#Partes_de_la_resta"> </a>
                  <a href="#Propiedades_de_la_resta">Propiedades de la suma</a>
                </li>
                <a href="#Propiedades_de_la_resta"></a>
                <li>
                  <a href="#Propiedades_de_la_resta"> </a>
                  <a href="#Resolver_una_resta">Resolver una suma</a>
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
            <h1 id="">RESTA</h1>
            <hr />
            <div className="tema-resta">
              <h2>¿QUE ES LA RESTA?</h2>
              <span>
                Es también conocida como sustracción y es la operación inversa a
                la suma. De esta manera, si se tiene a + b = c (suma), la resta
                sería c – b = a, permitiendo verificar si una suma se ha
                realizado correctamente o viceversa. La resta, también se ve
                como el proceso de quitar una cantidad a otra para obtener un
                resultado. Por ejemplo; si en un bus hay 11 personas y en una
                estación se bajan 5, quedan en el bus un total de 6 personas.
                Esto, es la resta en su forma más simple.
              </span>
              <br />
              <img src="images/uploads/resta1.png" alt="" />
            </div>
            <div>
              <br />
              <h2 id="Partes_de_la_resta">ElEMENTOS DE LA RESTA</h2>
              <span>
                Los números que se operan en la resta reciben unos nombres
                específicos, estos son:
              </span>
              <ul>
                <br />
                <li>
                  <span>
                    <strong>Sustraendo:</strong> corresponde al número que se va
                    a quitar o restar al minuendo.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    <strong>Minuendo:</strong> es el número al que se le quita o
                    sustrae otra cantidad.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    <strong>Diferencia:</strong> es el resultado obtenido de la
                    resta.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    <strong>Signo:</strong> se utiliza el símbolo (-) que
                    conecta los dos números y completa la expresión dada. Este
                    símbolo también es conocido como el signo menos.
                  </span>
                </li>
              </ul>
              <br />
              <img src="images/uploads/resta2.png" alt="" />
            </div>
            <div>
              <h2 id="Propiedades_de_la_resta">PROPIEDADES DE LA RESTA</h2>
              <span>
                La sustracción o resta no cumple con algunas propiedades de las
                operaciones aritméticas. Por tal motivo, es importante conocer
                qué propiedades se cumplen en la resta y cuáles no, así se evita
                cometer errores en los cálculos. A continuación, se mencionan
                cada una de las propiedades de las operaciones matemáticas,
                indicando si aplican o no en la resta.
              </span>
              <ul>
                <br />
                <li>
                  <span>
                    <strong>Propiedad Fundamental:</strong> Esta propiedad
                    permite verificar que una resta se halla realizado
                    correctamente. Al sumar el sustraendo con el resultado
                    obtenido de la resta, se debe obtener el mismo número del
                    minuendo. Sustraendo + Diferencia = Minuendo Por otra parte,
                    la resta del minuendo con la diferencia da el sustraendo.
                    Minuendo – Diferencia = Sustraendo.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    {" "}
                    <strong>No es conmutativa:</strong> en la resta no se pueden
                    cambiar el orden de los números (minuendo y sustraendo),
                    debido a que, si se afecta el resultado, entonces de manera
                    general a - b ≠ b - a.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    {" "}
                    <strong>No es asociativa:</strong> esta propiedad refiere
                    que se pueden agrupar de distintas maneras los números y el
                    resultado debe ser el mismo, pero en la resta esto no se
                    cumple, siendo (a - b) - c ≠ a - (b - c).
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    {" "}
                    <strong>Propiedad distribuitiva:</strong> esta propiedad se
                    hace en función de la multiplicación en combinación con la
                    resta. La propiedad dice que la resta de dos números,
                    multiplicados por un tercer número, será igual a la
                    diferencia del producto de cada término de la resta,
                    multiplicado por el tercer número. Se puede generalizar de
                    la siguiente manera: a * (b - c) = (a * b) - (a * c).
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    <strong>Propiedad del minuendo:</strong> si se suma o resta
                    un número al minuendo, el resultado de la resta queda sumado
                    o restado por el mismo número.
                  </span>
                </li>
                <br />
                <li>
                  <span>
                    {" "}
                    <strong>Propiedad del sustraendo:</strong> si se suma o
                    resta un número al sustraendo, el resultado de la resta
                    disminuye o aumenta en relación al mismo número.
                  </span>
                </li>
                <br />
              </ul>
              <div>
                <h2 id="Resolver_una_resta">RESOLVER UNA RESTA</h2>
                <span>
                  En la resta los números se pueden ordenar de forma horizontal
                  o vertical, sin embargo; para comprender mejor el proceso de
                  cómo restar, los números se ordenarán de manera vertical. Sin
                  embargo, sin importar si los números se encuentran de forma
                  vertical o horizontal, la sustracción mantiene un orden
                  posicional, donde se restan los números comenzando por la
                  unidad, luego las decenas, centenas, así hasta completar todos
                  los dígitos. Otra consideración que se debe hacer, es que si
                  el minuendo es menor al sustraendo se debe pedir prestado al
                  número de la siguiente columna a la izquierda. Restar 385 –
                  269
                </span>
                <ul>
                  <br />
                  <h3>PASO 1</h3>
                  <span>
                    Se ordena el minuendo y el sustraendo en columnas uno debajo
                    de otro, según su orden posicional.
                  </span>
                  <br />
                  <img src="images/uploads/resta3.png" alt="" />
                  <br />
                  <h3>PASO 2</h3>
                  <span>
                    Se comienza a restar los números de la unidad. En este caso
                    como
                    <MathComponent tex={String.raw`5 < 9`} display={false} />,
                    entonces; se “pedirá prestado” 1 al número de la columna
                    siguiente, en este caso la decena..
                  </span>
                  <img src="images/uploads/resta4.png" alt="" />
                  <h3>PASO 3</h3>
                  <span>Se restan los dígitos de la columna de la decena.</span>
                  <br />
                  <img src="images/uploads/resta5.png" alt="" />
                  <h3>PASO 4</h3>
                  <span>
                    Finalmente se restan los números de la columna de la
                    centena.
                  </span>
                  <br />
                  <img src="images/uploads/resta6.png" alt="" />
                  <br />
                  <span>
                    <strong>El resultado de la resta: 385 – 269 = 116.</strong>{" "}
                    La explicación dada corresponde a números naturales, para el
                    resto del conjunto de números, el proceso es el mismo desde
                    su forma fundamental con ciertas particularidades propias de
                    cada conjunto. Cuando se tienen números decimales, se restan
                    mediante el mismo procedimiento descrito, sin embargo, se
                    debe tener cuidado al momento de ordenar las cantidades.
                    Antes del punto decimal se ordenan las unidades, decenas,
                    centenas, etc.; después del punto decimal se alinean los
                    décimos, centésimos y milésimos, de la siguiente manera
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BWK6NLFQYzA?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <div className="pie">
          <button>
            <Link to={"/aprende-conmigo/quizz"}>SIGUIENTE</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Resta;
