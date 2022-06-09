const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true, // 라이브러리의 console.error 방지용
});

const userGallery = tns({
  container: '.user-gallery .slider-list',
  gutter: 4,
  controls: false,
  controlsContainer: '.user-gallery-controls',
  navContainer: '.user-gallery .thumbnail-list',
  navAsThumbnails: true,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true, // 라이브러리의 console.error 방지용
  responsive: {
    768: {
      gutter: 6,
      controls: true,
      edgePadding: 75,
    },
  },
});
