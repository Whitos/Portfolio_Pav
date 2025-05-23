"use client";

import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

/**
 * @typedef {Object} ContactFormData
 * @property {string} name
 * @property {string} email
 * @property {string} message
 */

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  /**
   * @param {ContactFormData} data
   */
  const onSubmit = (data) => {
    console.log("Contact form data:", data);
    toast.success("Message envoyé avec succès !");
    reset();
  };

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto px-4 py-20 border-b border-neutral-900"
    >
      <h2 className="text-4xl font-bold mb-10 text-center uppercase tracking-widest text-white">
        Contact
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-white uppercase tracking-wide">
            Nom
          </Label>
          <Input
            id="name"
            placeholder="Jean Dupont"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            {...register("name", { required: "Le nom est requis" })}
          />
          {errors.name && (
            <span className="text-sm text-red-400">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-white uppercase tracking-wide">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="jean@mail.com"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            {...register("email", {
              required: "L'email est requis",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Adresse email invalide",
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-400">{errors.email.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="grid gap-2">
          <Label
            htmlFor="message"
            className="text-white uppercase tracking-wide"
          >
            Message
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Votre message..."
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            {...register("message", { required: "Le message est requis" })}
          />
          {errors.message && (
            <span className="text-sm text-red-400">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-lg transition-all"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </Button>
      </form>
    </section>
  );
};

export default Contact;
