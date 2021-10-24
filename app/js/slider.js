$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      800: {
        items: 2,
      },

      1000: {
        items: 3,
      },
    },
  });

  $(".owl-prev span")[0].innerHTML =
    '<i class="far fa-arrow-alt-circle-left"></i>';
  $(".owl-next span")[0].innerHTML =
    '<i class="far fa-arrow-alt-circle-right"></i>';

});

//Función para mostrar las imágenes en el carrusel:
let route = "../assets/img/servicios/";
let imgs_info = [
{ url: 'artistico_1.jpg', 
  stars: 5,
  title: 'Maquillaje artistico', 
  price: '$200.000',
},
{ url: 'boda_1.jpg', 
  stars: 4,
  title: 'Maquillaje para boda',
  price: '$150.000',
},
{ url: 'fiesta_1.jpg', 
  stars: 5,
  title: 'Maquillaje para fiesta',
  price: '$85.000',
},
{ url: 'grado_1.jpg', 
  stars: 3,
  title: 'Maquillaje para grado',
  price: '$70.000',
},
{ url: 'quinceanera_1.jpg', 
  stars: 4,
  title: 'Maquillaje para quinceañeras',
  price: '$120.000',
}];

let template = document.querySelector('#template_carrusel');
let parent = document.querySelector('#parent_carrusel');

let icons = {
  star_got: template.querySelector('.star #star_got'),
  star_missing: template.querySelector('.star #star_missing')
}

imgs_info.forEach( function( img_info ){
  //Clono la plantilla:
  let clone = template.cloneNode(true);

  //Añado el display block, y las propiedades propias de img_info:
  clone.style.display = 'block';
  clone.querySelector('.img img').src = route + img_info.url;
  
  //Template para número de estrellas:
  stars = clone.querySelector('.star');
  stars.innerHTML = '';
  for(i=0 ; i < img_info.stars; i++) stars.appendChild( icons.star_got.cloneNode(true) );
  for(i=0; i < 5 - img_info.stars; i++) stars.appendChild( icons.star_missing.cloneNode(true) );

  //Otros detalles:
  let desc = clone.querySelector('.description');
  desc.querySelector('.desc-text').innerHTML = img_info.title;
  desc.querySelector('.desc-value').innerHTML = img_info.price;

  parent.appendChild(clone);
});
