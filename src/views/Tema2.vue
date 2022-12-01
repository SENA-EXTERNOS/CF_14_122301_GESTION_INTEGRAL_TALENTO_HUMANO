<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias de comunicación organizacional
    .row.mt-4 
        .col-lg-4
           figure
             img(src='@/assets/curso/temas/Tema2/img1.png', alt='Texto que describa la imagen')
              
        
        .col-lg-8.mt-4
            p La comunicación organizacional se refiere al envío y recepción de información entre individuos interrelacionados o que forman parte de alguna forma de organización; se establece en todas las instituciones y hace parte de la cultura corporativa; está documentada y organizada por medio de un plan de comunicaciones y, a partir de ella, se puede dar entre todos los niveles jerárquicos de la empresa,de manera fluida y efectiva. También, considera instaurar dinámicas de colaboración, combinación y de avance conjunto, dirigidas a los objetivos, o sea, que sirve para la gestión de la organización y la integración de sus distintos elementos, para crear efecto en la productividad y la calidad.

    p.mt-4 Por lo general, pueden existir dos tipos de comunicación organizacional:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Comunicación formal")
        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            h4 Comunicación formal
            p.mt-5 La propia empresa establece, genera, o manipula esta información. Se estructura bajo las políticas y metas de la empresa, debe ser controlada y estar sujeta a normas o reglas. Se refiere a la comunicación que se realiza a través de los conductos oficiales en la empresa. Se lleva a cabo entre directivos o empleados del mismo nivel o entre superiores y subordinados, y viceversa. Puede ser oral o escrita, pero toda la relación de esa comunicación se conserva dentro de la institución.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema2/pestania1.png', alt='Texto que describa la imagen')
              

      .py-3.py-md-4(titulo="Comunicación formal")
        .row.mt-5
          
          .col-md-6
            h4 Comunicación formal
            p.mt-5 Se utiliza a nivel personal, aunque también se da en el ámbito laboral y dentro del lugar de trabajo; se basa en la naturalidad, más no en la jerarquía, nace de la interacción social entre los miembros y del resultado de los vínculos que se crean dentro de la organización. No maneja reconocimiento oficial y no se respalda con ningún principio de comunicación específico y hace que se disfrute el tiempo que se pasa en la empresa.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema2/pestania2.png', alt='Texto que describa la imagen')
             
    .row.justify-content-start.align-items-center.mb-2.mt-5       
      .col-lg-5
        .bgp.p-1
          h3.mb-0 Comunicación interna y externa

          
    .row.mt-4.px-5
      .col-6.col-lg-1.px-1
        .bg4.px-1
          figure
            img(src='@/assets/curso/temas/Tema2/img2.png', alt='Texto que describa la imagen').imagen-decorativa-7

      .col-5.col-lg-11.px-5
        p La comunicación interna hace mención a toda la información que se genera, manipula o se utiliza dentro de la organización; es considerada como una herramienta gerencial aplicada en los niveles jerárquicos con el propósito de alcanzar todos los objetivos estratégicos, misionales, operativos, culturales y comportamentales de la empresa. 


        .col-5.col-lg-11.px-5
            .cajon.color-acento-contenido.p-4            
              p Las principales funciones de la comunicación interna son:
              ul.mt-2.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    |   Instaurar, perfeccionar o consolidar la imagen corporativa de la organización.
                  li
                    i.fas.fa-angle-right.color
                    |   Apoyar el logro de los objetivos, planes o programas y proyectos.
                  li
                    i.fas.fa-angle-right.color
                    |   Reducir los conflictos y los malos climas organizacionales.
                  li
                    i.fas.fa-angle-right.color
                    |   Instaurar espacios de libre expresión para que los empleados puedan brindar sus aportes y opiniones.

                  li
                    i.fas.fa-angle-right.color
                    |   Mantener una información actualizada y veraz, para los integrantes de la organización.
                  li
                    i.fas.fa-angle-right.color
                    |   Promover la buena comunicación entre todos los participantes y niveles de la empresa.
                  
    .row.mt-4
      .col-lg-12
        p La comunicación externa se conoce con el nombre de “comunicación comercial” y hace referencia a todo el intercambio o flujo de información que manipula la organización; está destinada para los públicos externos, sea de manera directa o a través de intermediarios, con el objetivo de mantener o mejorar sus relaciones corporativas, proyectar una imagen corporativa favorable y promover los productos o servicios; se refiere a los movimientos que la organización dirige hacia los agentes externos, consumidores y proveedores, inversores o sociedad, con el objetivo de generar, o reforzar las relaciones entre la compañía y los diferentes públicos.
        p.mt-2 Es así como la importancia de la comunicación organizacional radica en las siguientes funciones:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/Tema2/slider1.svg' alt='AvatarTop')
            p.text-center.mt-3 Resolver cambios con creatividad.

        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/Tema2/slider2.svg' alt='AvatarTop')
            p.text-center.mt-4 Realizar directrices para desarrollar actividades diarias.

        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/Tema2/slider3.svg' alt='AvatarTop')
            p.text-center.mt-4 Mejorar las relaciones interpersonales en la empresa.

    p.mt-4 Igualmente, es importante conocer cuáles son los elementos que intervienen en el proceso de comunicación. 
    p.mt-4 Analice con cuidado la siguiente imagen y conozca cada uno de esos elementos.

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/Tema2/img3.svg', alt='Texto que describa la imagen')
          
      .tarjeta.color-acento-botone.p-3(x="35%" y="22%" numero="+")
        .h5.mb-2 Código
        p Es el lenguaje o conjunto de reglas que se usan para transmitir el mensaje, y el cual debe ser común entre el emisor y el receptor, para que la información pueda ser entendida apropiadamente. Como ejemplos de códigos de comunicación se pueden citar: la gramática de un lenguaje o los algoritmos de un sistema informático.
      
      .tarjeta.color-acento-botone.p-3(x="58%" y="10%" numero="+")
        .h5.mb-2 Mensaje
        p Es el contenido de la información que envía el emisor al destinatario.

      .tarjeta.color-acento-botone.p-3(x="49%" y="48%" numero="+")
        .h5.mb-2 Canal
        p Es el medio o vía que usa el emisor para enviarle el mensaje al destinatario. Por ejemplo: correo electrónico, teléfono, etc.

      .tarjeta.color-acento-botone.p-3(x="90%" y="45%" numero="+")
        .h5.mb-2 Receptor
        p Es quien recibe el mensaje, es decir, el destinatario.

      .tarjeta.color-acento-botone.p-3(x="8%" y="49%" numero="+")
        .h5.mb-2 Emisor
        p Es quien envía el mensaje, es decir, el origen de la comunicación.


    .row.justify-content-start.align-items-center.mb-2.mt-5       
      .col-lg-5
        .bgp.p-1
          h3.mb-0 Comunicación interna y externa

    p.mt-4 Los tipos de comunicación son las diferentes formas que tenemos los seres humanos de transmitir un mensaje, tienen que ver con los diferentes ámbitos o situaciones que se presentan y con el modo de comunicarnos, entre otros.
    p.mt-3 A continuación, se presentan cada uno de ellos:

    .row.justify-content-center.mb-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/Tema2/img4.png", alt="alt")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Según el contexto")
            .col-lg-2 
              img(src="@/assets/curso/temas/Tema2/acor1.png", alt="alt")
            .col-10
              p.mb-0 Se clasifica en:
              ul.mt-4.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    b  Comunicación escrita:
                    |   se realiza mediante la palabra escrita que utiliza letras, grafías o símbolos.
                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Comunicación oral:
                    |   se realiza mediante el uso de la palabra hablada usando sonidos.

                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Comunicación no verbal:
                    |   se utilizan gestos corporales y faciales.
        

          .row(titulo="Según el grado de interacción")
            .col-lg-2 
              img(src="@/assets/curso/temas/Tema2/acor2.png", alt="alt")
            .col-10
              p.mb-0 Se clasifica en:
              ul.mt-4.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    b  Comunicación directa:
                    |   la comunicación entre el emisor y el receptor se realiza de manera personal o frente a frente.
                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Comunicación indirecta:
                    |   en este tipo de contacto se implementa una herramienta de comunicación, porque, tanto el emisor como el receptor no están presentes, como por ejemplo, una llamada telefónica o un correo electrónico.




          .row(titulo="Según el contexto donde se desarrollan")
            .col-lg-2 
              img(src="@/assets/curso/temas/Tema2/acor3.png", alt="alt")
            .col-10
              p.mb-0 Se clasifica en:
              ul.mt-4.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    b  Comunicación interna:
                    |   se realiza dentro de la organización, por ejemplo una reunión de personal.

                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Comunicación externa:
                    |    es la interacción del emisor y receptor que no se encuentran en el mismo contexto, por ejemplo: cliente y un trabajador de la empresa.


          .row(titulo="Según la cantidad de personas que intervienen")
            .col-lg-2 
              img(src="@/assets/curso/temas/Tema2/acor4.png", alt="alt")
            .col-10
              p.mb-0 Se clasifica en:
              ul.mt-4.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    b  Comunicación individual:
                    |   en este caso, es la comunicación en la cual solo hay un emisor y un destinatario por ejemplo, entre dos empleados.

                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Colectivas:
                    |    en este caso se presenta cuando la comunicación se genera con varias personas, por ejemplo, reunión entre directivos o reunión con todos los empleados, etc


          .row(titulo="Según el contexto de la realidad de la información")
            .col-lg-2 
              img(src="@/assets/curso/temas/Tema2/acor5.png", alt="alt")
            .col-10
              p.mb-0 Se clasifica en:
              ul.mt-4.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    b  Comunicación formal:
                    |    este tipo de comunicación dentro de la organización, se genera de forma escrita y debe cumplir con un proceso de difusión. 

                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Comunicación informal:
                    |     en este tipo de comunicación no se utilizan los mecanismos oficiales de difusión, por lo tanto, se hace más fácil y rápida la difusión, porque se puede dar en espacios dentro de la empresa, como en una oficina
          

          .row(titulo="Según la dependencia jerárquica")
            .col-lg-2 
              img(src="@/assets/curso/temas/Tema2/acor6.png", alt="alt")
            .col-10
              p.mb-0 Se clasifica en:
              ul.mt-4.lista-ul--
                  li 
                    i.fas.fa-angle-right.color
                    b  Comunicación ascendente:
                    |     es el tipo de comunicación que se da desde los trabajadores hacia los líderes en la estructura organizacional de la empresa, es decir, que se genera de abajo hacia arriba.

                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b  Comunicación horizontal:
                    |     este tipo de comunicación dentro de la estructura organizacional se presenta entre pares, es decir, entre los empleados que tienen el mismo nivel.

                  li.mt-3 
                    i.fas.fa-angle-right.color
                    b   Comunicación descendente:
                    |      este tipo de información se genera de arriba hacia abajo en la estructura organizacional, es decir, desde las coordinaciones hacia los empleados, o desde la gerencia hacia los trabajadores. 


      p.mt-4 Es importante saber que esa comunicación organizacional no está exenta de obstáculos. Algunos de estos son:
    .row.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Ambientales")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/Tema2/puntos1.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p.text-small En el caso de circunstancias como ruidos telefónicos, interrupciones, sillas incómodas, iluminación o ventilación deficiente, entre otras.

          .row(numero="2" titulo="Terminológicas")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/Tema2/puntos2.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p.text-small En el caso que en la comunicación se utilicen términos muy técnicos, difíciles de comprender, o cuando la información que se entrega no es clara.
      
      
          .row(numero="3" titulo="Administrativas")
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/Tema2/puntos3.png', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0
                p.text-small En el caso que la información que llega al receptor, no es de su competencia.
        
        
          .row(numero="4" titulo="Interpersonales")
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/Tema2/puntos4.png', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0
                p.text-small Cuando el emisor no transmite la información con claridad, se produce una información incorrecta y, en este caso, se generan malos entendidos.           
      
      .col-lg-4
        img(src='@/assets/curso/temas/Tema2/img6.png', alt='Texto que describa la imagen')

      .row.justify-content-center.mb-4.mt-4       
        .col-lg-10.px-1.col-xs-12
          .cajon.color-acento-contenido.p-4            
            p Para finalizar el tema, se aborda la cultura organizacional, que es la personalidad de la empresa u organización; son todas esas características que le dan una identidad y, a la vez, la diferencian de otras organizaciones, teniendo presente que esas mismas características comprenden las fortalezas y debilidades de la empresa.

      p.mt-5 Existen diferentes clases de cultura organizacional; a continuación, se mencionan algunas de ellas. 

      .row.justify-content-center.mb-4.mt-4   
        .col-lg-8

          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/Tema2/puntocaliente2.png', alt='Texto que describa la imagen')
                
            .tarjeta.color-acento-botone.p-3(x="-1%" y="2%" numero="+")
              .h5.mb-2 Orientada al poder
              p En este tipo de comunicación, cada trabajador se visualiza prestando un servicio y nada más, debido a que el objetivo primordial de la organización es la competitividad en el mercado.

            .tarjeta.color-acento-botone.p-3(x="99%" y="2%" numero="+")
              .h5.mb-2 Orientada a las normas
              p Su objetivo primordial es el cumplimiento riguroso del reglamento interno y las normas establecidas por la empresa; allí se establecen las tareas y responsabilidades que se deben efectuar.

            .tarjeta.color-acento-botone.p-3(x="-1%" y="74%" numero="+")
              .h5.mb-2 Orientada a las personas
              p El objetivo de este tipo de cultura organizacional, es el desarrollo tanto personal como profesional de los empleados, generando motivación en ellos, porque sus empleados representan a la empresa y, por lo tanto, son la clave para lograr las metas establecidas.
              p.mt-3 Es importante, en este caso, la satisfacción no solo de los clientes externos, sino también de los internos. 

            .tarjeta.color-acento-botone.p-3(x="99%" y="74%" numero="+")
              .h5.mb-2 Orientada a los resultados
              p Es quien recibe el mensaje, es decir, el destinatario.













      
        






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
