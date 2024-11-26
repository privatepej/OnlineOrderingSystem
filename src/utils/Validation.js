export const validateForm = (product) => {
  const errors = {};
  if (!product.pname) errors.pname = "Product name is required.";
  if (!product.price || isNaN(product.price))
    errors.price = "Price must be a valid number.";
  if (!product.categoryname) errors.categoryname = "Category is required.";
  return errors;
};

export const validateFormUpdate = (updatedProduct) => {
  const errors = {};
  if (!updatedProduct.pname.trim()) errors.pname = "Product name is required.";
  if (!updatedProduct.price || updatedProduct.price <= 0)
    errors.price = "Price must be greater than zero.";
  if (!updatedProduct.categoryname)
    errors.categoryname = "Category is required.";
  return errors;
};

export const validateCategoryUpdate = ({ updatedCategoryName }) => {
  const errors = {};
  if (!updatedCategoryName.trim()) {
    errors.updatedCategoryName = "Category name is required.";
  } else if (updatedCategoryName.length < 3) {
    errors.updatedCategoryName =
      "Category name must be at least 3 characters long.";
  }
  return errors;
};
