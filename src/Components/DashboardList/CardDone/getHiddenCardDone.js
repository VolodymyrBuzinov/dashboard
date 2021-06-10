function getShowCardDone(id) {
  const cardDone = document.querySelector(`#cardDone-${id}`);
  cardDone.hidden = true;
  console.log(cardDone);
  return;
}

export default getShowCardDone;
