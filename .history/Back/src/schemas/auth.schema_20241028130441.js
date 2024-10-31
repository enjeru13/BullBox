import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es obligatorio",
  }),
  direction: z.string({
    required_error: "La direccion es obligatoria",
  }),
  email: z
    .string({
      required_error: "El email es obligatorio",
    })
    .email({
      message: "Email invalido",
    }),
  cedula: z.string({
    required_error: "La cedula es obligatoria",
  }),
  tlf: z.string({
    required_error: "El numero de tlf es obligatorio",
  }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(5, {
      message: "La Contraseña debe contener minimo 5 caracteres",
    }),
});

export const loginSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es obligatorio",
  }),
  password: z
    .string({
      required_error: "La Contraseña es Obligatorio",
    })
    .min(5, {
      message: "La Contraseña debe contener minimo 5 caracteres",
    }),
});
