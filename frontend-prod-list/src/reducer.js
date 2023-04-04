export const initialState = {
  sku: "",
  name: "",
  price: "",
  selectedType: "",
  validation: "",
  weight: "",
  size: "",
  width: "",
  length: "",
  height: "",
  booksType: [],
  discsType: [],
  formRef: {},
  furnitureType: [],
  loading: false,
  getProducts: () => {},
  sendNewProduct: () => {},
  // addNewProduct: () => {},
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
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "validation":
      return {
        ...state,
        validation: action.payload,
      };
    case "size":
      return {
        ...state,
        size: action.payload,
      };
    case "weight":
      return {
        ...state,
        weight: action.payload,
      };
    case "width":
      return {
        ...state,
        width: action.payload,
      };
    case "length":
      return {
        ...state,
        length: action.payload,
      };
    case "height":
      return {
        ...state,
        height: action.payload,
      };
    default:
      return state;
  }
};
