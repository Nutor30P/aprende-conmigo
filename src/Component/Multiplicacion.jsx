import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Encabezado from "./Encabezado";
import "../styles/indice.css";
import { MathComponent } from "mathjax-react";
function Multiplicacion() {
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
                  <a href="#Qué_es_la_multiplicacion">¿Qué es la multiplicacion?</a>
                </li>
                <a href="#Qué_es_la_multiplicacion"></a>
                <li>
                  <a href="#Qué_es_la_multiplicacion"> </a>
                  <a href="#Partes_de_la_multiplicacion">Partes de la multiplicacion</a>
                </li>
                <a href="#Partes_de_la_multiplicacion"></a>
                <li>
                  <a href="#Partes_de_la_multiplicacion"> </a>
                  <a href="#Propiedades_de_la_multiplicacion">Propiedades de la multiplicacion</a>
                </li>
                <a href="#Propiedades_de_la_multiplicacion"></a>
                <li>
                  <a href="#Propiedades_de_la_multiplicacion"></a>
                  <a href="#Resolver_una_multiplicacion">Resolver una multiplicacion</a>
                </li>
                <a href="#Resolver_una_multiplicacion"></a>
                <li>
                  <a href="#Resolver_una_multiplicacion"></a>
                </li>
              </div>
              <div className="ancla-indice"></div>
            </ul>
          </div>
          <div className="principal-contenedor">
          <h1 id="">MULTIPLICACION</h1>
          <br />
          <hr />
          <div className="tema-multiplicacion">
            <br />
            <h2>¿QUE ES LA MULTIPLICACION?</h2>
            <span>
              La multiplicación es una operación básica aritmética, que se
              origina, desde su forma más simple de la suma sucesiva de un mismo
              número. Es conocida como una suma abreviada, ya que su proceso
              consiste en calcular el resultado de la suma de un mismo número
              (multiplicando), tantas veces como lo indique otro número
              (multiplicador). Con un ejemplo se puede comprender este proceso
              de multiplicación. Supóngase que hay un colegio con 5 salones de
              clase y que en cada salón hay 12 estudiantes, para saber, cuántos
              estudiantes hay en total, se podrían agrupar todos y contarlos.
            </span>
            <br />
            <img src="images/uploads/multi1.png" alt="" />
            <br />
            <span>
              Otra manera, es sumar 5 veces el 12 de este modo: 12 + 12 + 12 +
              12 + 12 = 60. En total hay 60 estudiantes o simplemente se abrevia
              la suma sucesiva para convertirla en una multiplicación 12 x 5,
              que refiere sumar 5 veces el 12. Ahora, ¿por qué usar la
              multiplicación si es lo mismo que una suma repetida? La respuesta
              es, debido a que la multiplicación permite simplificar la suma,
              principalmente cuando se trata de números más grandes. Considere
              en el ejemplo anterior, tener quizás, que conocer el número de
              estudiantes de 25 colegios cada uno con 5 salones y de 12
              estudiantes, sería una suma demasiado extensa, por lo que conviene
              realizar una multiplicación. Así, la multiplicación tiene su
              aplicación fundamental en el cálculo de cantidades, medidas, en
              procesos donde las cantidades cambian constantemente de valor.
            </span>
          </div>
          <br />
          <div>
            <h2 id="Partes_de_la_multiplicacion">ElEMENTOS DE LA RESTA</h2>
            <span>
              La operación de la multiplicación tiene varios elementos que la
              componen:
            </span>
            <ul>
              <br />
              <li>
              <span><strong>Factores:</strong> que son los números que se
                multiplican entre sí. Los factores tienen nombres específicos,
                uno es el “multiplicando” que es el número que se va a
                multiplicar y el “multiplicador” que indica las veces que se
                suma el multiplicando.</span>
              </li>
              <br />
              <li>
              <span><strong>Producto:</strong> es el resultado de la multiplicación.</span>
              </li>
              <br />
              <li>
              <span><strong>Signo:</strong> hay diferentes formas de representarlo,
                ya sea con una cruz o equis (x) o con un asterisco (*). El signo
                separa cada uno de los factores de la multiplicación e indica
                qué operación se debe realizar.</span>
              </li>
            </ul>
            <br />
            <img src="images/uploads/multi2.png" alt="" />
            <br />
          </div>
          <div>
            <br />
            <h2 id="Propiedades_de_la_multiplicacion">
              PROPIEDADES DE LA MULTIPLICACION
            </h2>
            <span>
              En matemática se han definido diferentes propiedades para la
              multiplicación, que permiten aplicarlas para facilitar la
              realización de la operación matemática. Estas propiedades se
              aplican a cualquier conjunto de números conocidos, naturales,
              enteros, racionales, reales y complejos, además de expresiones
              algebraicas, entre otros. A continuación, se definen cada una de
              las propiedades de la multiplicación:
            </span>
            <ul>
              <br />
              <li>
              <span><strong>Propiedad Conmutativa:</strong> esta propiedad refiere,
                que no importa el orden en el que se multipliquen los números,
                siempre se obtendrá el mismo resultado. Se puede tener 5 * 4 =
                20 o bien 4 * 5 = 20.
                <MathComponent
                  tex={String.raw`a * b = b * a`}
                  display={false}
                />
                </span>
              </li>
              <br />
              <li>
              <span><strong>Propiedad Asociativa:</strong> si se deben multiplicar
                más de tres números, estos se pueden agrupar de distintas
                maneras para facilitar los cálculos y el resultado final será el
                mismo. Así, si se tienen los números representados con las
                letras a, b, c se pueden multiplicar de varias maneras:
                <MathComponent
                  tex={String.raw`a * (b * c) = (a * b) * c`}
                  display={false}
                />
                <br />
                Lo que se encuentra entre paréntesis se debe multiplicar primero
                y el resultado se multiplica por el otro número. Por ejemplo (2
                * 3) * 5 = 6 * 5 = 30, se puede realizar de la manera: 2 * (3 *
                5) = 2 * 15 = 30. El resultado es el mismo.</span>
              </li>
              <br />
              <li>
              <span> <strong>Propiedad del Elemento Neutro:</strong> es también
                conocida como propiedad modulativa. Esta define, que todo número
                multiplicado por el número 1 es igual al mismo número.
                Multiplicar 213 * 1 = 213. 78 * 1 = 78. El elemento neutro de la
                multiplicación es el número 1 y se puede generalizar la
                propiedad como: a * 1 = a</span>
              </li>
              <br />
              <li>
              <span> <strong>Propiedad absorbente:</strong> en esta propiedad
                cualquier número que se multiplique por 0, dará como resultado
                el número 0. Por ejemplo, 12 * 0 = 0, 310 * 0 = 0. Se puede
                generalizar la propiedad como: a * 0 = 0</span>
              </li>
              <br />
              <li>
              <span>  <strong>Propiedad distribuitiva:</strong>en esta propiedad se
                hace referencia a la multiplicación en combinación con la suma o
                resta, de la siguiente manera: Si se tiene la siguiente
                multiplicación 5 * (2 + 6), para resolver se multiplica el
                número que está fuera del paréntesis por cada número dentro del
                paréntesis y luego se suman los resultados.
                <br />
                <img src="images/uploads/multi3.png" alt="" />
                <br />
                Se puede generalizar de la siguiente manera: a * (b ± c) = a*b ±
                a*c, el signo ±, significa que se puede dar una suma o una
                resta, pero el proceso es el mismo.</span>
              </li>
            </ul>
            <br />

            <div>
              <h2 id="Resolver_una_multiplicacion">RESOLVER UNA MULTIPLICACION</h2>
              <span>
                Partiendo de los elementos básicos de la multiplicación se
                explicarán los pasos para su resolución. Desde la definición de
                la multiplicación de dos números, se puede desarrollar la
                multiplicación que sigue a continuación. Los factores se pueden
                ordenar de manera vertical o horizontal.
              </span>
              <br />
              <img src="images/uploads/multi4.png" alt="" />
              <br />
              <span>
                De esta manera se tiene que, para multiplicar 5 x 6, es igual a
                sumar el 5 repetidamente 6 veces, 5 + 5 + 5 + 5 + 5 + 5= 30,
                entonces se tiene que 5 x 6 = 30. Estas multiplicaciones básicas
                de dos números naturales, se resumen en lo que se conoce como la
                tabla de multiplicar, una vez aprendidas se pueden hacer
                multiplicaciones más largas como la siguiente. Se tiene la
                multiplicación de 1243 x 2. Se multiplica cada número del
                multiplicando (1243) por el multiplicador (2). Primero se
                alinean los números de manera vertical, ordenándolos por su
                valor posicional, unidad, decena, centena, unidad de mil. Y se
                escribe el signo a la izquierda del multiplicador. Una vez
                ordenados se traza una línea para separar los factores de los
                que será el producto o resultado.
              </span>
              <br />
              <img src="images/uploads/multi5.png" alt="" />
              <br />
              <span>
                Luego, se multiplica cada dígito del multiplicando por el
                multiplicador, comenzando desde la unidad y en orden, cada
                resultado obtenido se escribe debajo de la línea que se trazó,
                de igual manera en orden de posición de cada dígito.
              </span>
              <div>
                <ul>
                  <br />
                  <h3>PASO 1</h3>
                  <span>
                    se comienza con el dígito en el lugar de las unidades. (3 x
                    2 = 6)
                    <br />
                  </span>
                  <br />
                  <h3>PASO 2</h3>
                  <span>multiplicar 2 con el dígito de las decenas (4 × 3 = 8)</span><br />
                  <br />
                  <h3>PASO 3</h3>
                  <span>
                    se multiplica 2 con el dígito en el lugar de las centenas. <br />
                    (2 × 2 = 2) <br />
                  </span>
                  <br />
                  <h3>PASO 4</h3>
                  <span>
                    se multiplica 2 con el dígito en el lugar de los millares.
                    (1 × 2 = 2)
                  </span>
                  <br />
                  <img src="images/uploads/multi6.png" alt="" />
                </ul>
              </div>
              <span>
                Si el resultado de una de las multiplicaciones tiene dos cifras,
                por ejemplo 15, se escribe el dígito de la unidad y el de la
                decena se coloca sobre la cifra del número siguiente de la
                izquierda y se suma al producto de ese renglón. En el caso que
                el multiplicador tenga más de dos dígitos, se realiza el proceso
                anterior, el multiplicando por el dígito de la unidad del
                multiplicador, luego se procede a multiplicar el multiplicando
                por el dígito de la decena del multiplicador corriendo un lugar
                hacia la izquierda en el resultado. Por último, los resultados
                se suman.
                <br />  
                <div>
                  <ul>
                    <br />
                    <h3>PASO 1</h3>
                    <span>se multiplica 1243 x 2, según el proceso anterior. <br /></span>
                    <br />
                    <h3>PASO 2</h3>
                    <span>
                      se multiplica 1243 x 3, el resultado se comienza a
                      escribir corriendo un lugar hacia la izquierda.
                    </span>
                    <ol>
                      <li>
                        Al multiplicar 4 x 3 = 12, en este caso se escribe el 2
                        (unidad) y el 1(decena) se coloca encima del siguiente
                        número de la izquierda del multiplicando.
                      </li>
                      <li>
                        Al multiplicar (3 x 2) + 1= 6 + 1=7, se le suma el 1 que
                        se llevaba del calculo anterior.
                      </li>
                    </ol>
                    <h3>PASO 3</h3>
                    <span>se suman los productos obtenidos</span>
                      <br />
                    <img src="images/uploads/multi7.png" alt="" />
                  </ul>
                </div>
              </span>
            </div>
            </div>
          </div>
        </div>
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AE4B0hgnz0E?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default Multiplicacion;
