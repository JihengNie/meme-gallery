var $gallery = document.querySelector('main');

const imgUrls = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://helios-i.mashable.com/imagery/articles/00jdsdJ5TJ5j9pExdUWjQaC/hero-image.fill.size_1248x702.v1611611940.jpg',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  // console.log($imageUrlInput.value);
  if ($imageUrlInput.value !== '') {
    imgUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imgUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imgUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
