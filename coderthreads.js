$(document).ready(function() {
  $(document).on('click', '.category-button', function(e) {
    e.preventDefault();
    var $categoryLink = $(this);
    var categoryId = $categoryLink.attr('href');
    var $parent = $categoryLink.parent();
    $parent.addClass('category-button-selected');
    $parent.siblings().removeClass('category-button-selected');

    $(categoryId).fadeIn(100);
    $('.products').not(categoryId).fadeOut(100);
  });

  $('.category-button-initial').trigger('click');
});
