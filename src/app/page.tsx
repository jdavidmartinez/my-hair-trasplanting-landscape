import Image from "next/image"; // Re-importamos el componente Image

export default function Home() {
  return (
    // Contenedor principal de la página. Usamos clases de Tailwind para un layout simple.
    // Puedes ajustar estas clases según necesites para el diseño general.
    <div className="flex flex-col min-h-screen">

      {/*
        =============================================
        Sección Superior (Hero Section)
        =============================================
        Esta sección es la primera que ve el usuario.
        Debe tener un titular impactante, subtítulo,
        una imagen o video relevante y el CTA principal.
        Usamos un azul aguamarina para el fondo.
      */}
      <section className="w-full bg-teal-600 text-white py-20 text-center"> {/* Usamos teal-600 para un azul aguamarina */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recupera tu Cabello y tu Confianza
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Descubre la Solución Definitiva con la Última Tecnología en Implante Capilar
          </p>
          {/* Placeholder para el botón CTA principal */}
          {/* Botón con fondo blanco y texto con el color del fondo de la sección */}
          <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300">
            Agenda tu Consulta Gratuita
          </button>
          {/* Placeholder para imagen o video de fondo/principal */}
          {/* Cuando añadas una imagen, necesitarás descomentar la importación de Image y usar el componente: */}
          {/* <Image src="/placeholder-hero.jpg" alt="Implante Capilar" width={800} height={400} className="mt-10 mx-auto"/> */}
        </div>
      </section>

      {/*
        =============================================
        Sección de Empatía / Problema
        =============================================
        Conecta emocionalmente con el visitante, mostrando comprensión
        por la situación de la alopecia. Fondo gris claro.
      */}
      <section className="w-full bg-gray-100 py-16 text-center"> {/* Gris muy claro */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"> {/* Texto gris oscuro */}
            Entendemos tu Situación
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto"> {/* Texto gris más claro */}
            Sabemos el impacto emocional que la pérdida de cabello puede tener en tu vida y tu autoestima. No estás solo en esto.
          </p>
        </div>
      </section>

      {/*
        =============================================
        Sección de Solución / Presentación del Tratamiento
        =============================================
        Introduce el implante capilar como la solución efectiva. Fondo blanco.
      */}
      <section className="w-full bg-white py-16 text-center"> {/* Fondo blanco */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"> {/* Texto gris oscuro */}
            La Solución: Implante Capilar Avanzado
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto"> {/* Texto gris más claro */}
            El implante capilar es un procedimiento seguro y efectivo que te permite recuperar el cabello de forma natural y permanente.
          </p>
        </div>
      </section>

      {/*
        =============================================
        Sección "Nuestro Diferencial" / Tecnología y Procedimientos
        =============================================
        Destaca la tecnología y los procedimientos de vanguardia. Fondo azul muy claro.
      */}
      <section className="w-full bg-blue-50 py-16 text-center"> {/* Azul muy claro */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"> {/* Texto gris oscuro */}
            Tecnología de Última Generación
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"> {/* Texto gris más claro */}
            Utilizamos las técnicas más avanzadas y equipos de precisión para garantizar resultados óptimos y naturales.
          </p>
          {/* Aquí podrías añadir detalles específicos de la tecnología/técnicas */}
          {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>Detalle Técnica 1</div>
              <div>Detalle Tecnología 2</div>
            </div> */}
        </div>
      </section>

       {/*
        =============================================
        Sección Antes y Después (Imágenes)
        =============================================
        Muestra resultados visuales con fotos comparativas.
      */}
      <section className="w-full bg-white py-16"> {/* Fondo blanco */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Resultados Reales: Antes y Después
          </h2>
          {/* Contenedor para las parejas de imágenes. Usamos grid para layout responsivo. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Ejemplo de una pareja de imágenes Antes y Después */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Paciente 1</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  {/* Reemplaza "/images/placeholder-antes.jpg" con la ruta real de tu imagen Antes */}
                  <Image
                    src="/before-after/Paciente01_antes_01.jpg"
                    alt="Paciente 1 Antes"
                    width={300} // Ajusta el ancho según tus imágenes
                    height={300} // Ajusta la altura según tus imágenes
                    className="rounded-lg shadow-md object-cover" // Clases para estilo
                  />
                  <p className="mt-2 text-gray-700 text-sm">Antes</p>
                </div>
                <div className="flex flex-col items-center">
                  {/* Reemplaza "/images/placeholder-despues.jpg" con la ruta real de tu imagen Después */}
                   <Image
                    src="/before-after/Paciente01_despues_01.jpg"
                    alt="Paciente 1 Después"
                    width={300} // Ajusta el ancho según tus imágenes
                    height={300} // Ajusta la altura según tus imágenes
                    className="rounded-lg shadow-md object-cover" // Clases para estilo
                  />
                  <p className="mt-2 text-gray-700 text-sm">Después</p>
                </div>
              </div>
            </div>

            {/* Puedes duplicar el bloque anterior para añadir más parejas de imágenes */}
             {/* Ejemplo de otra pareja de imágenes Antes y Después */}
             <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Paciente 2</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  {/* Reemplaza "/images/placeholder-antes-2.jpg" con la ruta real de tu imagen Antes */}
                  <Image
                    src="/before-after/Paciente01_antes_02.jpg"
                    alt="Paciente 2 Antes"
                    width={300} // Ajusta el ancho según tus imágenes
                    height={300} // Ajusta la altura según tus imágenes
                    className="rounded-lg shadow-md object-cover" // Clases para estilo
                  />
                  <p className="mt-2 text-gray-700 text-sm">Antes</p>
                </div>
                <div className="flex flex-col items-center">
                  {/* Reemplaza "/images/placeholder-despues-2.jpg" con la ruta real de tu imagen Después */}
                   <Image
                    src="/before-after/Paciente01_despues_02.jpg"
                    alt="Paciente 2 Después"
                    width={300} // Ajusta el ancho según tus imágenes
                    height={300} // Ajusta la altura según tus imágenes
                    className="rounded-lg shadow-md object-cover" // Clases para estilo
                  />
                  <p className="mt-2 text-gray-700 text-sm">Después</p>
                </div>
              </div>
            </div>
            {/* Fin de ejemplo de otra pareja de imágenes */}

          </div>
        </div>
      </section>


      {/*
        =============================================
        Sección de Beneficios
        =============================================
        Enfócate en los resultados y cómo mejoran la vida del paciente. Fondo blanco.
        (Esta sección se mueve D E S P U E S de la galería de imágenes)
      */}
      <section className="w-full bg-white py-16 text-center"> {/* Fondo blanco */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"> {/* Texto gris oscuro */}
            Beneficios para Ti
          </h2>
          {/* Lista o descripción de beneficios */}
          <ul className="text-lg text-gray-700 list-disc list-inside max-w-2xl mx-auto text-left"> {/* Texto gris más claro */}
            <li>Resultados naturales y estéticos.</li>
            <li>Procedimiento seguro y mínimamente invasivo.</li>
            <li>Recuperación rápida.</li>
            <li>Cabello permanente que puedes peinar y cuidar normalmente.</li>
            <li>¡Recupera tu confianza y autoestima!</li>
          </ul>
        </div>
      </section>

      {/*
        =============================================
        Sección de Prueba Social (Testimonios / Casos de Éxito)
        =============================================
        Muestra la experiencia de otros pacientes. Fondo gris claro.
        (Esta sección se mueve D E S P U E S de la galería de imágenes)
      */}
      <section className="w-full bg-gray-100 py-16 text-center"> {/* Gris muy claro */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"> {/* Texto gris oscuro */}
            Historias de Éxito
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto"> {/* Texto gris más claro */}
            Lee lo que dicen nuestros pacientes satisfechos y ve sus transformaciones.
          </p>
          {/* Aquí irían los testimonios, quizás en un carrusel o grid */}
          {/* <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div>Testimonio 1</div>
              <div>Testimonio 2</div>
              <div>Testimonio 3</div>
            </div> */}
        </div>
      </section>

      {/*
        =============================================
        Sección "Nuestro Equipo"
        =============================================
        Presenta a los profesionales detrás del tratamiento. Fondo azul muy claro.
      */}
      <section className="w-full bg-blue-50 py-16 text-center"> {/* Azul muy claro */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"> {/* Texto gris oscuro */}
            Nuestro Equipo de Especialistas
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto"> {/* Texto gris más claro */}
            Contamos con médicos y personal altamente calificado y con experiencia en implante capilar.
          </p>
          {/* Aquí irían las fotos y descripciones del equipo */}
          {/* <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div>Dr. Nombre Apellido</div>
              <div>Dr. Nombre Apellido</div>
              <div>Enfermera Nombre Apellido</div>
            </div> */}
        </div>
      </section>


      {/*
        =============================================
        Sección de Preguntas Frecuentes (FAQ)
        =============================================
        Responde a las dudas más comunes para aclarar el proceso. Fondo blanco.
      */}
      <section className="w-full bg-white py-16"> {/* Fondo blanco */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"> {/* Texto gris oscuro */}
            Preguntas Frecuentes
          </h2>
          {/* Lista de preguntas y respuestas */}
          <div className="max-w-3xl mx-auto text-gray-700"> {/* Texto gris más claro */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">¿El procedimiento es doloroso?</h3> {/* Títulos de FAQ en gris oscuro */}
              <p>La mayoría de los pacientes experimentan mínimas molestias...</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Cuánto tiempo dura la recuperación?</h3>
              <p>La recuperación inicial suele ser de unos pocos días...</p>
            </div>
            {/* Añadir más preguntas y respuestas */}
          </div>
        </div>
      </section>


      {/*
        =============================================
        Sección de CTA Final / Contacto
        =============================================
        Reiteración del Call to Action y formulario de contacto. Fondo azul aguamarina.
      */}
      <section className="w-full bg-teal-600 text-white py-20 text-center"> {/* Usamos teal-600 para un azul aguamarina */}
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Dar el Primer Paso?
            </h2>
            <p className="text-xl mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a recuperar tu cabello.
            </p>
            {/* Placeholder para el formulario de contacto o botón CTA final */}
            {/* Cuando implementes el formulario, puedes estilizarlo con clases de Tailwind */}
            {/* <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <input type="text" placeholder="Nombre" className="w-full p-3 mb-4 border rounded"/>
                <input type="email" placeholder="Correo Electrónico" className="w-full p-3 mb-4 border rounded"/>
                <input type="tel" placeholder="Teléfono" className="w-full p-3 mb-4 border rounded"/>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  Enviar Solicitud
                </button>
            </form> */}
             {/* O un botón si el CTA es llamar o ir a otra página */}
             {/* Botón con fondo blanco y texto con el color del fondo de la sección */}
             <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300">
                Agenda tu Consulta Gratuita Ahora
            </button>
         </div>
      </section>


      {/*
        =============================================
        Pie de Página (Footer)
        =============================================
        Información legal, enlaces adicionales, redes sociales. Fondo gris oscuro.
      */}
      <footer className="w-full bg-gray-800 text-white py-8 text-center text-sm"> {/* Gris oscuro */}
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Nombre de tu Clínica/Proyecto. Todos los derechos reservados.</p>
          {/* Enlaces a políticas, redes sociales, etc. */}
          {/* Puedes estilizar los enlaces con clases de Tailwind para que se vean bien sobre el fondo oscuro */}
          {/* <div className="mt-4">
              <a href="/politica-privacidad" className="text-gray-400 hover:text-white mx-2">Política de Privacidad</a>
              <a href="/terminos-servicio" className="text-gray-400 hover:text-white mx-2">Términos de Servicio</a>
            </div> */}
        </div>
      </footer>

    </div>
  );
}
