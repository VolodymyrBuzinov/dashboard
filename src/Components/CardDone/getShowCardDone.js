function getShowCardDone(id) {
  const cardDone = document.querySelector(`#cardDone-${id}`);
  cardDone.hidden = false;
  return;
}

export default getShowCardDone;
