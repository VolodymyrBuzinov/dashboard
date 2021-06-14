function getShowCardDone(id) {
  const cardDone = document.querySelector(`#cardDone-${id}`);
  cardDone.hidden = true;
  return;
}

export default getShowCardDone;
