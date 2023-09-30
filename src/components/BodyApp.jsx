import { ContextUrl } from "./StoreUrl";
import { useFetch } from "./useFetch";
import Cards from "./Cards";
import { useContext, useEffect, useState, useRef } from "react";
import "./BodyApp.css";
import {ArrowRightCircleIcon,ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function BodyApp(props) {
  const containerRef = useRef(null);
  const [stateLink, setStateLink] = useContext(ContextUrl);
  const { data, loading, error } = useFetch(stateLink);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Mantén todas las películas en un solo arreglo
  const allMovies = data.results;

  // Calcula los índices de inicio y finalización para la página actual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Filtra los datos para mostrar solo los de la página actual
  const dataToShow = allMovies.slice(startIndex, endIndex);

  // Maneja el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Verifica si hay contenido disponible para las páginas siguiente y anterior
  const hasNextPage = endIndex < allMovies.length;
  const hasPreviousPage = currentPage > 1;

  // Maneja el efecto de desenfoque al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >= containerRef.current.offsetHeight
      ) {
        // El usuario ha llegado al final, muestra gradualmente las películas desenfocadas
        const blurredMovies =
          containerRef.current.querySelectorAll(".blurred-movie");
        blurredMovies.forEach((el) => {
          el.style.filter = "blur(0px)";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Inicialmente, aplica desenfoque a todas las películas excepto las primeras 5
    containerRef.current
      .querySelectorAll(".blurred-movie:not(.blurred)")
      .forEach((el) => {
        el.style.opacity = 0;
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="flex flex-col">
        {/* Contenedor para elementos de película */}
        <div className="movie-container" ref={containerRef}>
          <ul className="flex flex-wrap">
            {error && <li>Error: {error}</li>}
            {/* Muestra las películas de la página actual */}
            {dataToShow.map((item, index) => (
              <li
                key={item.id}
                className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4 ${
                  index >= 6 ? "blurred-movie" : ""
                }`}
              >
                {/* Renderiza la película completa */}
                <Cards
                  imageUrl={stateLink.urlImage + (item.poster_path || "")}
                  title={item.title || "Title not available"}
                  rating={item.vote_average || "Rating not available"}
                  reviews={item.vote_count || "Reviews not available"}
                  idSelection={item.id}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Contenedor para botones de paginación */}
        <div className="pagination-container mt-12">
          <div className="flex justify-center">
            {/* Renderiza botones de paginación solo si hay contenido disponible */}
            {hasPreviousPage && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!hasPreviousPage}
              >
                <ArrowLeftCircleIcon className="w-12 h-12" title="Previous"/>
              </button>
            )}
            {hasNextPage && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
              >
                <ArrowRightCircleIcon className="w-12 h-12" title="Next"/>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyApp;
