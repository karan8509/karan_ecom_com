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

      console.log("Cart Items:", updated);
    } catch (error) {
      console.log("Error in addToCart:", error.message);
      set({ loading: false });
    }
  },
}));

export default useProductStore;
