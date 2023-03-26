export const initialState = {
  sku: "",
  name: "",
  price: "",
  selectedType: "",
  booksType: [],
  discsType: [],
  formRef: {},
  furnitureType: [],
  loading: false,
  getProducts: () => {},
  setLoading: () => {},
  sendNewProduct: () => {},
  addNewProduct: () => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "sku":
      return {
        ...state,
        sku: action.payload,
      };
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "price":
      return {
        ...state,
        price: action.payload,
      };
    case "selectedType":
      return {
        ...state,
        selectedType: action.payload,
      };
    case "booksType":
      return {
        ...state,
        booksType: action.payload,
      };
    case "discsType":
      return {
        ...state,
        discsType: action.payload,
      };
    case "furnitureType":
      return {
        ...state,
        furnitureType: action.payload,
      };
    default:
      return state;
  }
};
