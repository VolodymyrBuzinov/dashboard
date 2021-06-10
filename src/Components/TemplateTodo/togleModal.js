const toggleModal = (type, cb) => {
  switch (type) {
    case 'difficulty':
      cb(prev => !prev);
      break;
    case 'category':
      cb(prev => !prev);
      break;
    case 'delete':
      cb(prev => !prev);
      break;
    default:
      break;
  }
};

export default toggleModal;
