const reviewLikeBtnList = document.querySelectorAll('.review-card-footer button');

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';

const toggleReviewLikeBtn = index => {
  const isLiked = reviewLikeBtnList[index].classList.contains('btn-primary');
  const textElement = reviewLikeBtnList[index].nextElementSibling;
  const reviewCardFooter = reviewLikeBtnList[index].parentNode;

  if (isLiked) {
    reviewLikeBtnList[index].innerHTML = NOT_HELPFUL;
  } else {
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');

    reviewLikeBtnList[index].innerHTML = HELPFUL;
    reviewLikeBtnList[index].prepend(checkIcon);
  }

  if (textElement) {
    const countSpan = textElement.querySelector('span');
    const count = parseInt(countSpan.innerHTML.replaceAll(',', ''));
    let newCount = count;
    if (isLiked) {
      newCount -= 1;
      if (newCount === 0) {
        reviewCardFooter.removeChild(textElement);
      } else {
        countSpan.innerHTML = newCount.toLocaleString('ko-Kr');
      }
    } else {
      newCount += 1;
      countSpan.innerHTML = newCount.toLocaleString('ko-Kr');
    }
  } else {
    if (!isLiked) {
      const nextTextElement = document.createElement('p');
      nextTextElement.innerHTML = '<strong><span>1</span>명</strong>에게 도움이 되었습니다.';
      reviewCardFooter.appendChild(nextTextElement);
    }
  }

  reviewLikeBtnList[index].classList.toggle('btn-primary');
  reviewLikeBtnList[index].classList.toggle('btn-outlined');
};

reviewLikeBtnList.forEach((button, index) => {
  button.addEventListener('click', () => toggleReviewLikeBtn(index));
});
