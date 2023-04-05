<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mt-4.px-5
      .col-lg-1.px1
        .bg4.px-1
          figure
            img(src='@/assets/curso/temas/Introduccion/Icono1.svg').imagen-decorativa-7

      .col-lg-11.px-4
        p  Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán los conceptos básicos sobre la función y el desempeño que se llevan a cabo en los cargos de la empresa, con el objetivo de implementar y acondicionar el manual de funciones para cada puesto de trabajo. 
      
      p.mt-4.px-1 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    .row.mt-4
      .col-lg-6
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VD75SvAkIrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
