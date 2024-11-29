import { useState } from "react";
import useModal from "../hooks/useModal";

const useProductModalHandlers = () => {
  const addModal = useModal();
  const deleteModal = useModal();
  const updateModal = useModal();
  const addCategoryModal = useModal();
  const deleteCategoryModal = useModal();
  const updateCategoryModal = useModal();

  const [fieldErrors, setFieldErrors] = useState({});
  const [newProduct, setNewProduct] = useState({
    pname: "",
    price: "",
    description: "",
    categoryname: "",
  });
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCloseModal = () => {
    setNewProduct({ pname: "", price: "", description: "", categoryname: "" });
    setFieldErrors({});
    addModal.closeModal();
  };

  const handleCloseDeleteModal = () => {
    setSelectedProduct("");
    deleteModal.closeModal();
  };

  const handleCloseUpdateModal = () => {
    updateModal.closeModal();
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    setNewProduct((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Attach the file object
    }));
  };

  return {
    addModal,
    deleteModal,
    updateModal,
    addCategoryModal,
    deleteCategoryModal,
    updateCategoryModal,
    fieldErrors,
    setFieldErrors,
    handleChange,
    newProduct,
    setNewProduct,
    selectedProduct,
    setSelectedProduct,
    selectedCategory,
    setSelectedCategory,
    handleCloseModal,
    handleCloseDeleteModal,
    handleCloseUpdateModal,
  };
};

export default useProductModalHandlers;
