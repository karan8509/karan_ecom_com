import { create } from "zustand";

const useProductStore = create((set, get) => ({
  allProducts: JSON.parse(localStorage.getItem("product")) || [],
  loading: false,

  addToCart: async (product) => {
    set({ loading: true });
    try {
      const prev = get().allProducts;
      const updated = [...prev, product];
      localStorage.setItem("product", JSON.stringify(updated));
      set({ allProducts: updated, loading: false });
    } catch (error) {
      console.log("Error in addToCart:", error.message);
      set({ loading: false });
    }
  },
  removeCart: (id) => {
    try {
      const current = get().allProducts;
      // ✅ Remove the product with matching id
      const filtered = current.filter((item) => item.id !== id);
      // ✅ Save updated list to localStorage
      localStorage.setItem("product", JSON.stringify(filtered));
      // ✅ Update Zustand state
      set({ allProducts: filtered });
      console.log("Removed item ID:", id);
      console.log("Updated cart:", filtered);
    } catch (error) {
      console.log("Error in removeCart:", error.message);
    }
  }, 
}));

export default useProductStore;
