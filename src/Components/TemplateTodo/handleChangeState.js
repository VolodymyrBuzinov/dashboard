const handleChangeState = (type, value, cb) => {
  switch (type) {
    case 'category':
      cb(value);
      break;
    case 'difficulty':
      cb(value);
      break;
    case 'time':
      cb(value);
      break;
    case 'title':
      cb(value);
    case 'challenge':
      cb(value);
      break;

    default:
      break;
  }
};

export default handleChangeState;
