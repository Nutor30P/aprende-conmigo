import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Encabezado from "./Encabezado";
import "../styles/indice.css";
import { MathComponent } from "mathjax-react";
function Suma() {
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
                  <a href="#Qué_es_la_suma">¿Qué es la suma?</a>
                </li>
                <a href="#Qué_es_la_suma"></a>
                <li>
                  <a href="#Qué_es_la_suma"> </a>
                  <a href="#Partes_de_la_suma">Partes de la suma</a>
                </li>
                <a href="#Partes_de_la_suma"></a>
                <li>
                  <a href="#Partes_de_la_suma"> </a>
                  <a href="#Propiedades_de_la_suma">Propiedades de la suma</a>
                </li>
                <a href="#Propiedades_de_la_suma"></a>
                <li>
                  <a href="#Propiedades_de_la_suma"> </a>
                  <a href="#Resolver_una_suma">Resolver una suma</a>
                </li>
                <a href="#Resolver_una_suma"></a>
                <li>
                  <a href="#Resolver_una_suma"> </a>
                </li>
              </div>
              <div className="ancla-indice"></div>
            </ul>
          </div>
          <h1 id="">Suma</h1>
          <p>
            Operación aritmética que consiste en agrupar varias cantidades o
            elementos en una sola.
          </p>
          <hr />
          <div className="tema-suma">
            <h2>¿Qué es la suma?</h2>
            <p>
              La suma, también conocida como adición, es una operación
              aritmética básica que consiste en agrupar varias cantidades o
              elementos en una sola. La suma se define para el conjunto de los
              números, desde los naturales hasta los complejos, al igual que,
              para las expresiones algebraicas, vectores y en geometría, es
              decir; estructuras asociadas al conjunto de números, con sus
              particularidades. De este modo se puede decir, que la suma se
              aplica en las diferentes áreas de las matemáticas y las ciencias
              en general. Para entender, la operación de la suma desde su forma
              más elemental, se debe tener una aproximación a los conjuntos,
              así, por ejemplo; si se tiene el conjunto “A” formado por las
              vocales y el conjunto “B” que contiene las consonantes, la suma de
              A + B, será el resultado de unir los elementos de ambos conjuntos.
            </p>
            <img src="/images/uploads/conjuntos.png" alt="" />
            <p>
              Bastará ahora, con contar la cantidad de letras del nuevo conjunto
              (A + B) para conocer el resultado. El símbolo utilizado en la suma
              de conjuntos es el de "+".
            </p>
          </div>
          <div>
            <h2 id="Partes_de_la_suma">Partes de la suma</h2>
            <p>La suma tiene 3 elementos bien definidos, estos son:</p>
            <ul>
              <li>
                <strong>Sumandos:</strong> que son los números que se suman,
                pueden ser dos o más números.
              </li>
              <li>
                <strong>Suma:</strong> es el resultado de la operación
                matemática. También se le conoce como total.
              </li>
              <li>
                <strong>Signo:</strong> Es el símbolo que indica que la
                operación matemática corresponde a la suma. Se utiliza una cruz
                (+).
              </li>
            </ul>
            <p>En la siguiente suma se representan sus elementos:</p>
            <br />
            <img src="/images/uploads/como-sumar.png" alt="" />
          </div>
          <div>
            <h2 id="Propiedades_de_la_suma">Propiedades de la suma</h2>
            <p>
              En la suma, se cumplen cuatro propiedades fundamentales, para
              cualquier conjunto de números: N, Z, Q, R, C y para cualquier
              estructura asociada, con sus particularidades.
              <ul>
                <li>
                  <strong>Comutativa:</strong> se origina en la palabra
                  conmutar, que significa "cambiar de orden". Entonces, esta
                  propiedad refiere, que no importa el orden en el que se sumen
                  los números, el resultado siempre será el mismo. De manera
                  general, se define como:{" "}
                  <MathComponent
                    tex={String.raw`a + b = b + a`}
                    display={false}
                  />
                  . A manera de ejemeplo:{" "}
                  <MathComponent
                    tex={String.raw`2 + 3 = 3 + 2`}
                    display={false}
                  />
                  .
                </li>
                <li>
                  <strong>Asociativa:</strong> si se desean sumar más de tres
                  números, estos se pueden agrupar de distintas maneras y el
                  resultado de la adición será el mismo. Así, si se tienen los
                  números representados con las letras a, b, c se pueden sumar
                  de varias maneras:{" "}
                  <MathComponent
                    tex={String.raw`(a + b) + c = a + (b + c)`}
                    display={false}
                  />
                  . si se desean sumar más de tres números, estos se pueden
                  agrupar de distintas maneras y el resultado de la adición será
                  el mismo. Así, si se tienen los números representados con las
                  letras a, b, c se pueden sumar de varias maneras:
                </li>
                <li>
                  <strong>Identidad:</strong> es la propiedad que indica que
                  existe un número que, al sumarlo a cualquier otro, el
                  resultado será el mismo número. Este número se conoce como
                  identidad aditiva y se representa con la letra "0". Por
                  ejemplo:{" "}
                  <MathComponent tex={String.raw`a + 0 = a`} display={false} />.
                </li>
                <li>
                  <strong>Elemento inverso:</strong> es el número que, al
                  sumarlo a otro, el resultado es cero. Este número se conoce
                  como elemento inverso aditivo y se representa con la letra
                  "0". Por ejemplo:{" "}
                  <MathComponent
                    tex={String.raw`a + (-a) = 0`}
                    display={false}
                  />
                  .
                </li>
                <li>
                  <strong>Propiedad distribuitiva:</strong> en esta propiedad se
                  hace en función de la multiplicación en combinación con la
                  suma. La propiedad dice que la suma de dos números,
                  multiplicado por un tercero, será igual a la suma del producto
                  de cada sumando, multiplicado por el tercer número. Se puede
                  generalizar de la siguiente manera:{" "}
                  <MathComponent
                    tex={String.raw`a * (b + c) = a * b + a * c`}
                    display={false}
                  />
                  . Como por ejemplo:{" "}
                  <MathComponent
                    tex={String.raw`2 * (3 + 4) = 2 * 3 + 2 * 4`}
                    display={false}
                  />
                </li>
              </ul>
            </p>
            <div>
              <h2 id="Resolver_una_suma">Resolver una Suma</h2>
              <p>
                Para realizar una suma, los sumadores se pueden ordenar de dos
                maneras:
              </p>
              <ul>
                <li>En columna</li>
                <p>
                  Por lo general se utiliza para cantidades pequeñas o pocos
                  sumandos y ayuda al aprendizaje del cálculo mental. Por
                  ejemplo, 9 + 5 = 14. Para sumar cantidades de más de un dígito
                  ordenados de manera horizontal, se deben sumar según el valor
                  posicional de derecha a izquierda, de esta misma manera se
                  colocan en el total. Así, se suman, unidades con unidades,
                  decenas con las decenas, hasta sumar todos los dígitos.
                  <br />
                  <img src="/public/images/suma_columna.png" alt="suma" />
                </p>
                <li>En línea</li>
                <p>
                  Para este caso, se ordenan los números según el valor
                  posicional. Se hace, colocando los dígitos uno sobre el otro,
                  siguiendo la estructura de unidades (U), decenas (D), centenas
                  (C), siguen los millares, cada uno con su correspondiente, así
                  sucesivamente, hasta ordenar todos lo números. Pueden darse
                  diferentes casos de sumas, desde las más sencillas de un
                  dígito o más o las sumas “llevando” o con “acarreo”. Estas se
                  dan cuando los números de una columna son mayores a 9. A
                  continuación, mediante un ejemplo, se explican los pasos para
                  realizar una suma de manera vertical. Se desea sumar: 594 +
                  548.
                </p>
                <h3>PASO 1</h3>
                <p>
                  Se ordenan los sumandos en columna uno debajo de otro, según
                  su orden posicional.
                </p>
                <img src="/public/images/paso1.png" alt="" />
                <h3>PASO 2</h3>
                <p>
                  Se comienza sumando siempre de derecha a izquierda, es decir;
                  desde la unidad.
                </p>
                <img src="/images/paso2.png" alt="" />
                <h3>PASO 3</h3>
                <p>
                  Luego, se suman los dígitos de la columna de la decena y al
                  resultado se le agrega el acarreo.
                </p>
                <img src="/images/paso3.png" alt="" />
                <h3>PASO 4</h3>
                <p>Se procede de igual manera que con la unidad y la decena.</p>
                <img src="/images/paso4.png" alt="" />
                <p>
                  De esta manera, se obtiene el total de la suma, donde 594 +
                  548 = 1142. Cuando se tienen números decimales, se suman
                  mediante el mismo procedimiento descrito, sin embargo, se debe
                  tener cuidado al momento de ordenar las cantidades.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BWK6NLFQYzA?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </>
  );
}

export default Suma;
