export const validateForm = (product) => {
  const errors = {};
  if (!product.pname) errors.pname = "Product name is required.";
  if (!product.price || isNaN(product.price))
    errors.price = "Price must be a valid number.";
  if (!product.categoryname) errors.categoryname = "Category is required.";
  return errors;
};
