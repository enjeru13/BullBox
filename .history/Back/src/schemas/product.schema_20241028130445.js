import { z } from "zod";

export const productSchema = z.object({
  name: z.string({
    required_error: "El nombre del Producto es obligatorio",
  }),
  description: z.string({
    required_error: "La descripcion es obligatoria",
  }),
  price: z.number({
    required_error: "El precio es obligatorio",
  }),
  image: z.string({
    required_error: "La imagen es obligatoria",
  }),
  category: z.string({
    required_error: "La categoria es obligatoria",
  }),
});
