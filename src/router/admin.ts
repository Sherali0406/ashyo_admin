import products from "./products";
import brands from "../router/brand"
export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layouts/AdminLayout.vue"),
  children: [
    {
      path: "/dashboard",
      name: "admin_dashboard",
      component: () => import("@/views/CategoryView.vue"),
    },
    products,
    brands
  ],
};
