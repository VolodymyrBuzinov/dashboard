function getShowCardDone(id) {
  const cardDone = document.querySelector(`#cardDone-${id}`);
  cardDone.hidden = false;
  console.log(cardDone);
  return;
}

export default getShowCardDone;
