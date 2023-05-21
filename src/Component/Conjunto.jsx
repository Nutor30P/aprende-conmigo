import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Encabezado from "./Encabezado";
import "../styles/styles.css"

function Conjunto() {
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
                  <a href="#Qué_es_la_conjunto">¿Qué son los conjuntos?</a>
                </li>
                <a href="#Qué_es_la_conjunto"></a>
                <li>
                  <a href="#Qué_es_la_conjunto"> </a>
                  <a href="#Partes_de_la_conjunto">Teoria de los conjuntos</a>
                </li>
                <a href="#Partes_de_la_conjunto"></a>
                <li>
                  <a href="#Partes_de_la_resta"> </a>
                  <a href="#Propiedades_de_la_conjunto">Tipos de conjuntos</a>
                </li>
                <a href="#Propiedades_de_la_resta"></a>
                <li>
                  <a href="#Propiedades_de_la_conjunto"></a>
                  <a href="#Resolver_una_conjunto">Conjuntos y Subconjuntos</a>
                </li>
              </div>
              <div className="ancla-indice"></div>
            </ul>
          </div >
          <div className="principal-contenedor">
          <div className="inicio">
          <h1 id="">CONJUNTOS</h1>
          <span>
            Un conjunto es la agrupación de diferentes elementos que comparten
            entre sí características y propiedades semejantes. Estos elementos
            pueden ser sujetos u objetos, tales como números, canciones, meses,
            personas, etc. Por ejemplo: el conjunto de números primos o el
            conjunto de planetas del sistema solar. A su vez, un conjunto puede
            convertirse también en un elemento. Por ejemplo: en el caso de un
            ramo de flores, en principio una flor sería el primer elemento, pero
            al conjunto de flores se lo puede considerar luego como un ramo de
            flores, convirtiéndose así, en un nuevo elemento. Para graficar un
            conjunto se utilizan corchetes para delimitar los elementos que lo
            conforman, que se separan entre sí mediante comas. Por ejemplo: Se
            define a “S” como el conjunto de los días de la semana, por lo
            tanto, S= [lunes, martes, miércoles, jueves, viernes, sábado,
            domingo].
            <br />
            <br />
            <img src="images/uploads/conjunto1.png" alt="" />
          </span>
          </div>
          <hr />
          <div className="tema-conjuntos">
            <h2>TEORIA DE CONJUNTOS</h2>
            <span>
              La teoría de conjuntos es la rama de la matemática que estudia a
              los conjuntos. Fue introducida como disciplina por el matemático
              ruso Georg Cantor, quien definió al conjunto como la colección de
              elementos finitos o infinitos y lo utilizó para explicar las
              matemáticas. Cantor estudió el conjunto de números racionales y
              naturales y fue revolucionario su descubrimiento de los conjuntos
              de números infinitos, ya que develó la existencia de infinitos de
              diferentes tamaños al asegurar que siempre se puede encontrar un
              infinito mayor. Los descubrimientos de Cantor no fueron bien
              recibidos en el ámbito matemático de finales del siglo XIX. Sin
              embargo, hoy es considerado un visionario en el estudio de lo que
              él denominó los transfinitos, estudio que contribuyó al de los
              conjuntos abstractos e infinitos.
            </span>
          </div>
          <div className="tipos">
            <h2 id="Partes_de_la_conjunto">TIPOS DE CONJUNTOS</h2>
            <span>
            A la hora de formar un conjunto, la manera y el porqué de la agrupación de los elementos que lo conforman puede variar dando lugar a diferentes tipos de conjuntos, que pueden ser:
            </span>
            <ul>
              <li>
              <span><strong>Conjuntos Finitos:</strong> Sus elementos pueden contarse o enumerarse en su totalidad. Por ejemplo: los meses del año, los días de la semana o los continentes.</span>
                <br />
                <img src="images/uploads/conjunto2.png" alt="" />
              </li>
              <li>
              <span><strong>Conjuntos Infinitos:</strong> Sus elementos no se pueden contar o enumerar en su totalidad, debido a que no tienen fin. Por ejemplo: los números.</span>
                <br />
                <img src="images/uploads/conjunto3.png" alt="" />
              </li>
              <li>
              <span><strong>Conjuntos Unitario:</strong> Está compuesto por un único elemento. Por ejemplo: La Luna es el único elemento en el conjunto “satélites naturales de la Tierra”.</span>
                <br />
                <img  src="images/uploads/conjunto4.png" alt="" />
              </li>
              <li>
              <span> <strong>Conjunto Vacio:</strong> No presenta ni contiene elementos.</span>
                <br />
                <img src="images/uploads/conjunto5.png" alt="" />
              </li>
              <li>
              <span> <strong>Conjunto Universal:</strong> Es el conjunto que contiene a todos los elementos de un conjunto dado. Por ejemplo: el conjunto de los números naturales.</span>
                <br />
                <img src="images/uploads/conjunto6.png" alt="" />
              </li>
              <li>
              <span> <strong>Conjunto Disjunto:</strong> Es el conjunto que no tiene elementos en común con otro conjunto. Por ejemplo: el conjunto de los números pares y el conjunto de los números impares.</span>
                <br />
                <img src="images/uploads/conjunto7.png" alt="" />
              </li>
              <li>
              <span><strong>Conjunto heterogéneo</strong>Sus elementos difieren en clase y categoría.</span>
                <br />
                <img src="images/uploads/conjunto9.png" alt="" />
              </li>
              <li>
              <span>  <strong>Conjunto homogéneo:</strong> Sus elementos son de la misma clase y categoría.</span>
                <br />
                <img src="images/uploads/conjunto8.png" alt="" />
              </li>
            </ul>
            <br />
          </div>
          <div>
            <h2 id="Propiedades_de_la_conjunto">Conjuntos y Subconjuntos</h2>
            <span>
            Se denomina subconjunto al conjunto que se encuentra dentro de otro conjunto, es decir, el conjunto A es subconjunto del conjunto B, si todos los elementos de A están incluidos en B.
            </span>
            <br />
            <br />
            <span>
            Por ejemplo: el conjunto de los números naturales es un subconjunto del conjunto de los números reales, ya que todos los números naturales están incluidos en los números reales.
            </span>
            <br />
            <br />
            <span>
              Por ejemplo: Los países de América del Sur son un subconjunto del conjunto países del mundo.
            </span>
            <br />
            <br />
            <span>
              Por ejemplo: El conjunto de los números pares es un subconjunto del conjunto de los números naturales.
            </span>
          </div>
        </div>
        </div>
        <br />
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0a0HFmATqAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default Conjunto;
