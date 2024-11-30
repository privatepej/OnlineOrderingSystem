import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductFilter = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  categories,
}) => {
  const { t } = useTranslation("productFilter");

  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        overflowY: "auto",
      },
    },
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "start", mb: 3, flex: 1 }}>
      <FormControl sx={{ flex: 0.94 }}>
        <InputLabel>{t("SORT_CATEGORY")}</InputLabel>
        <Select
          label={t("SORT_CATEGORY")}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          MenuProps={menuProps}
        >
          <MenuItem value="">{t("ALL_CATEGORIES")}</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category.cname}>
              {category.cname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label={t("SEARCH_PRODUCT")}
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flex: 2, ml: 4.5 }}
      />
    </Box>
  );
};

export default ProductFilter;
