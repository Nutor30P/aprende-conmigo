import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Encabezado from "./Encabezado";
import "../styles/indice.css";
import { MathComponent } from "mathjax-react";
function Division() {
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
                  <a href="#Qué_es_la_resta">¿Qué es la division?</a>
                </li>
                <a href="#Qué_es_la_resta"></a>
                <li>
                  <a href="#Qué_es_la_resta"> </a>
                  <a href="#Partes_de_la_resta">Partes de la division</a>
                </li>
                <a href="#Partes_de_la_resta"></a>
                <li>
                  <a href="#Partes_de_la_resta"> </a>
                  <a href="#Propiedades_de_la_resta">Propiedades de la division</a>
                </li>
                <a href="#Propiedades_de_la_resta"></a>
                <li>
                  <a href="#Propiedades_de_la_resta"> </a>
                  <a href="#Resolver_una_resta">Resolver una division</a>
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
          <h1 id="">DIVISION</h1>
          <br />
          <hr />
          <div className="tema-resta">
            <h2>¿QUE ES LA DIVISION?</h2>
            <span>
              La división es una operación básica de la matemática que permite
              distribuir un todo en partes iguales, siendo la operación inversa
              de la multiplicación. La distribución en partes iguales de un todo
              de manera exacta no siempre ocurre, pueden sobrar algunos
              elementos que a su vez deben dividirse para poder ser repartidos o
              simplemente dejarlos sin repartir. De este ejemplo sencillo se
              puede entender las divisiones: se tienen 6 hot dogs para repartir
              entre dos personas, haciendo la división en partes iguales a cada
              persona le corresponden 3 hot dogs.
            </span>
            <br />
            <img src="images/uploads/division1.png" alt="" />
            <br />
            <span>
              Por ser la división la operación inversa de la multiplicación, al
              dividir se halla uno de los factores de la multiplicación. Además,
              por ser inversa mediante la multiplicación se puede comprobar que
              el resultado de una división sea correcto. Según el ejemplo, hay
              dos personas y a cada una le corresponden 6 hot dogs, si se desea
              saber cuántos hot dogs hay entre las 2 persona se multiplica 2 x 3
              = 6, que fue la cantidad que se tenía inicialmente para repartir.
              <br />
            </span>
          </div>
          <div>
            <br />
            <h2 id="Partes_de_la_resta">PARTES DE LA DIVISION</h2>
            <span>
              La división tiene varios elementos que la conforman con nombres
              propios cada uno de ellos. Siempre se pueden diferenciar uno del
              otro sin importar la manera como se exprese la operación de la
              división.
            </span>
            <br />
            <img src="images/uploads/division2.png" alt="" />
            <ul>
              <li>
                <br />
                <span><strong>Dividiendo:</strong> el número que se va a dividir, el
                que se va a repartir.</span>
              </li>
              <br />
              <li>
              <span><strong>Divisor:</strong> el número que divide al dividendo, e
                indica entre cuantas partes se desean repartir los elementos.</span>
              </li>
              <br />
              <li>
              <span><strong>Cociente:</strong> resultado de una división.</span>
              </li>
              <br />
              <li>
              <span><strong>Residuo:</strong> es el número que sobra cuando se
                divide un número entre otro.</span>
              </li>
            </ul>
            <br />
            <img src="images/uploads/resta2.png" alt="" />
          </div>
          <div>
            <h2 id="Propiedades_de_la_resta">TIPOS DE DIVISION</h2>
            <span>
              Las divisiones se pueden clasificar en dos tipos y esto depende
              del resultado del residuo, que este sea igual a cero o diferente
              de cero.
            </span>
            <ul>
              <li>
                <br />
                <span><strong>Divisiones exactas:</strong> Cuando el residuo es igual
                a cero. Esto significa que el número de elementos a repartir del
                dividendo, se hace completamente entre las partes del divisor
                sin que quede residuo alguno. Por ejemplo, al dividir 12 ÷ 4 =
                3; el cociente o resultado es 3, por lo que los 12 elementos del
                dividendo se pueden repartir perfectamente entre las 4 partes
                del divisor, correspondiéndole a cada parte 3 elementos y no
                sobra nada.</span>
              </li>
              <li>
                <br />
                <span><strong>Divisiones inexactas:</strong> Esta se da cuando el
                residuo es diferente de cero y menor que el divisor. Es decir,
                que el número de elementos del dividendo no fue posible
                repartirlos completamente entre las partes del divisor, quedando
                elementos sin repartir. Para este caso, si se tiene 12 ÷ 9 = 1 y
                sobran siempre 3, y por más que se desee repartir lo que sobró
                entre las partes del divisor siempre sobraran 3 porciones del
                elemento.</span>
              </li>
            </ul>
            <div>
              <h2 id="Resolver_una_resta">RESOLVER UNA DIVISION </h2>
              <span>
                Los elementos de la división dan lugar a las llamadas divisiones
                de una cifra (divisor con un solo dígito), divisiones de dos
                cifras (divisores de dos dígitos), divisiones con decimales en
                el dividendo y/o en el divisor. Se explicarán estos casos con
                ejemplos para una mejor comprensión.
                <br />
              </span>
              <ul>
                <br />
                <h3>DIVISIONES DE UNA CIFRA</h3>
                <span>
                  El dividendo puede tener cualquier cantidad de cifras, pero el
                  divisor tiene un solo dígito.
                </span>
                <img src="images/uploads/division3.png" alt="" />
                <img src="/images/uploads/division4.png" alt="" />
                <h3>DIVISIONES DE DOS CIFRAS</h3>
                <span>
                  El dividendo puede tener cualquier cantidad de cifras, pero el
                  divisor tiene dos dígitos.
                </span>
                <img src="images/uploads/division5.png" alt="" />
                <img src="images/uploads/division5.png" alt="" />
              </ul>
            </div>
          </div>
          <div>
            <h2 id="Propiedades_de_la_resta">PROPIEDADES DE LA DIVISION</h2>
            <span>
            Las principales propiedades de la división son las siguientes:
            </span>
            <ul>
              <li>
                <br />
                <span> <strong>Es no conmutativa:</strong>  en la división no se puede cambiar el orden de los números (dividendo y divisor), debido a que, si se afecta el resultado, entonces de manera general a ÷ b ≠ b ÷ a.</span>
              </li>
              <br />
              <li>
              <span><strong>No es asociativa:</strong> esta propiedad refiere que se pueden agrupar de distintas maneras los números y el resultado debe ser el mismo, pero en la división esto no se cumple, siendo (a ÷ b) ÷ c ≠ a ÷ (b ÷ c).</span>
              </li>
              <br />
              <li>
              <span> <strong>Dividir entre uno:</strong> cualquier número dividido entre uno da como resultado el mismo número. Por ejemplo, 5 ÷ 1 = 5.</span>
              </li>
              <li>
                <br />
                <span> <strong>Division 0:</strong>  al dividir el cero, entre cualquier número, el resultado siempre da igual a cero. Por ejemplo, 0 ÷ 5 = 0.</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mQ4wKV9_pZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default Division;
