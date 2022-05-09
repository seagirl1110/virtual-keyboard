const hightlightKeys = (item) => {
  item.classList.add('keyboard__key--active');
};

const notHightlightKeys = (item) => {
  item.classList.remove('keyboard__key--active');
};

export { hightlightKeys, notHightlightKeys };
