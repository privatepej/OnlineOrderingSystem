import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const ProductFilter = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  categories,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "start", mb: 3, flex: 1 }}>
      <FormControl sx={{ flex: 0.94 }}>
        <InputLabel>Sort by Category</InputLabel>
        <Select
          label="Sort by Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category.cname}>
              {category.cname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Search Products"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flex: 2, ml: 4.5 }}
      />
    </Box>
  );
};

export default ProductFilter;
