export default {
  global: {
    componenteFormativo: 'Elaboración del manual de funciones',
    descripcionCurso:
      'En este componente formativo se tratará el tema de la elaboración del manual de funciones, teniendo en cuenta los procesos y procedimientos de la organización; igualmente, se abordarán los conceptos básicos sobre la función y el desempeño del recurso humano en los cargos de la empresa, para implementar y acondicionar el manual de funciones para cada puesto de trabajo. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },

      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },

      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manual de funciones y competencias',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategias de comunicación organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Procesos y procedimientos de la organización – Sistemas de gestión',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manual de funciones y competencias',
      referencia:
        'Decreto 770 de 2005. Por el cual se establece el sistema de funciones y de requisitos generales para los empleos públicos correspondientes a los niveles jerárquicos pertenecientes a los organismos y entidades del Orden Nacional, a que se refiere la ley 909 de 2004. Marzo 17 de 2005. ',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16126#:~:text=Por%20el%20cual%20se%20establece,la%20Ley%20909%20de%202004. ',
    },
    {
      tema: 'Manual de funciones y competencias',
      referencia:
        'Departamento Administrativo de la Función Pública. (2021). <em>Plan Nacional de Competencias Laborales en el Sector Público.  <em>',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/web/eva/biblioteca-virtual/-/document_library/bGsp2IjUBdeu/view_file/38715883  ',
    },

    {
      tema: 'Estrategias de comunicación organizacional',
      referencia:
        'Mendoza, S., Rodríguez, D. & Patoni, R. (2012). <em> Estrategias de comunicación organizacional. Contribuciones a las Ciencias Sociales. <em>',
      tipo: 'Artículo',
      link: 'https://www.eumed.net/rev/cccss/21/jpr.html   ',
    },
    {
      tema: 'Estrategias de comunicación organizacional',
      referencia:
        'Bonilla P. (2022). <em>7 tipos de cultura organizacional más comunes.<em>',
      tipo: 'Artículo',
      link: 'https://innovatingpeople.com.mx/blog/cultura-organizacional/',
    },
  ],
  glosario: [
    {
      termino: 'Competencias',
      significado:
        'son aquellas habilidades, capacidades y conocimientos que una persona tiene para cumplir eficientemente determinada tarea.',
    },
    {
      termino: 'Comunicación',
      significado:
        'es la acción consciente de intercambiar información entre dos o más participantes con el fin de transmitir un mensaje.',
    },
    {
      termino: 'Funciones',
      significado:
        'actividades particulares que realiza una persona dentro de un sistema de elementos, personas, relaciones, etc., con un fin determinado.',
    },
    {
      termino: 'Gestión',
      significado:
        'conjunto de operaciones que se realizan para dirigir y administrar un negocio o una empresa.',
    },
    {
      termino: 'Información',
      significado:
        'está constituida por un grupo de datos ya supervisados y ordenados, que sirven para construir un mensaje, basado en un cierto fenómeno o ente.',
    },
    {
      termino: 'Manual',
      significado:
        'libro o folleto en el cual se recogen los aspectos básicos, esenciales de una materia.',
    },
    {
      termino: 'Organización',
      significado:
        'estructura ordenada donde coexisten e interactúan personas con diversos roles, responsabilidades o cargos, que buscan cumplir con unos objetivos esperados.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'conjunto de acciones que tienen que realizarse todas igualmente, para obtener los mismos resultados bajo las mismas circunstancias.',
    },
    {
      termino: 'Proceso',
      significado:
        'procesamiento o conjunto de operaciones a que se somete un elemento para elaborarla o transformarla.',
    },
    {
      termino: 'Sistemas',
      significado:
        'conjunto ordenado de normas y procedimientos que regulan el funcionamiento de un grupo o colectividad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 815 de 2018. Por el cual se modifica el Decreto 1083 de 2015, Único Reglamentario del Sector de Función Pública, en lo relacionado con las competencias laborales generales para los empleos públicos de los distintos niveles jerárquicos. Mayo 8 de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=86304',
    },
    {
      referencia:
        'Decreto 1083 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector de Función Pública. Mayo 26 de 2015. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62866#1083',
    },
    {
      referencia:
        'Función Pública. (s.f.). <em> Manual de funciones y competencias laborales. <em>',
      link:
        'https://www.funcionpublica.gov.co/preguntas-frecuentes/-/asset_publisher/sqxafjubsrEu/content/manual-de-funciones-y-competencias-laborales',
    },
    {
      referencia:
        'Función Pública. (2018). <em> Guía para Establecer o Modificar el Manual de Funciones y de Competencias Laborales.<em> ',
      link:
        'https://www.funcionpublica.gov.co/documents/418548/34150781/Gu%C3%ADa+para+establecer+o+modificar+el+manual+de+funciones+y+de+competencias+laborales+-+Versi%C3%B3n+2+-+Abril+2018.pdf/caa81178-376a-e0f2-2dfa-e859a8824538?t=1531756428307',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
