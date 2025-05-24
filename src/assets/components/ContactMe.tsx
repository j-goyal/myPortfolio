import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { FiAlertTriangle, FiSend } from "react-icons/fi";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  RECAPTCHA_SITE_KEY,
} from "../constants/constants";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "./ThemeProvider";

export function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { resolvedTheme } = useTheme();

  const getToastStyle = (type: "success" | "error") => {
    const isDark = resolvedTheme === "dark";

    return {
      style: {
        background: isDark ? "#374151" : "#ffffff",
        color: isDark ? "#f3f4f6" : "#374151",
        border: isDark ? "1px solid #4b5563" : "1px solid #d1d5db",
        borderRadius: "12px",
        boxShadow: isDark
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        fontSize: "15px",
        fontWeight: "500",
        maxWidth: "400px",
      },
      iconTheme: {
        primary: type === "success" ? "#10b981" : "#ef4444",
        secondary: isDark ? "#374151" : "#ffffff",
      },
      duration: 5000,
    };
  };

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleRecaptchaError = useCallback(() => {
    if (!isSubmitting) {
      setRecaptchaToken(null);
      toast.error(
        "reCAPTCHA error occurred. Please try again.",
        getToastStyle("error")
      );
    }
  }, [resolvedTheme]);

  const handleRecaptchaExpired = useCallback(() => {
    if (!isSubmitting) {
      setRecaptchaToken(null);
      toast.error(
        "reCAPTCHA expired. Please verify again.",
        getToastStyle("error")
      );
    }
  }, [resolvedTheme]);

  const resetRecaptcha = useCallback(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setRecaptchaToken(null);
  }, []);

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Name can only contain letters, spaces, apostrophes, or hyphens"
      )
      .min(2, "Name is too short")
      .max(50, "Name is too long")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .transform((value) => value.toLowerCase())
      .required("Email is required"),

    subject: Yup.string()
      .trim()
      .min(5, "Subject is too short")
      .max(100, "Subject is too long")
      .required("Subject is required"),

    message: Yup.string()
      .trim()
      .min(10, "Message is too short")
      .max(1000, "Message is too long")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      if (!recaptchaToken) {
        toast.error(
          "Please complete the reCAPTCHA verification.",
          getToastStyle("error")
        );
        return;
      }
      setIsSubmitting(true);

      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            subject: values.subject,
            message: values.message,
            "g-recaptcha-response": recaptchaToken,
          },
          EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          toast.success(
            "Message sent successfully! I'll get back to you soon.",
            getToastStyle("success")
          );
          resetRecaptcha();
          resetForm();
        })
        .catch(() => {
          toast.error(
            "Failed to send message. Please try again.",
            getToastStyle("error")
          );
          resetRecaptcha();
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
  });

  const handleClear = () => {
    formik.resetForm();
    resetRecaptcha();
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10 py-12"
    >
      <Toaster position="top-center" />
      <div className="w-full lg:w-[980px] flex flex-col items-start">
        <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 text-2xl mb-2">
          REACH OUT
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-300 dark:to-gray-100 rounded-full mb-8"></div>
      </div>

      <div className="w-full lg:w-[950px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden font-math">
        <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-300"></div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6 text-justify">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Get in Touch
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                Have a project in mind, want to collaborate, or just say hello?
                I&apos;d love to hear from you. I&apos;m always open to
                discussing new opportunities — whether it&apos;s freelance work,
                creative tech ideas, or startup brainstorming.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    I&apos;ll personally review and respond to your message,
                    usually within 24-48 hours.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    For urgent matters, feel free to highlight that in the
                    subject line.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    Looking forward to connecting with you!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md">
              <form
                ref={formRef}
                onSubmit={formik.handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500 dark:border-red-300"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500`}
                    placeholder="Your name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-300 flex items-center gap-1 animate-bounce">
                      <FiAlertTriangle className="w-3.5 h-3.5 mb-0.5" />
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500 dark:border-red-300"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500`}
                    placeholder="Your email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-300 flex items-center gap-1 animate-bounce">
                      <FiAlertTriangle className="w-3.5 h-3.5 mb-0.5" />
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      formik.touched.subject && formik.errors.subject
                        ? "border-red-500 dark:border-red-300"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500`}
                    placeholder="Subject of your message"
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-300 flex items-center gap-1 animate-bounce">
                      <FiAlertTriangle className="w-3.5 h-3.5 mb-0.5" />
                      {formik.errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-500 dark:border-red-300"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500`}
                    placeholder="Your message"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-300 flex items-center gap-1 animate-bounce">
                      <FiAlertTriangle className="w-3.5 h-3.5 mb-0.5" />
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center py-2">
                  <div className="transform scale-90 sm:scale-100">
                    <ReCAPTCHA
                      key={resolvedTheme}
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      theme={resolvedTheme === "dark" ? "dark" : "light"}
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                      onError={handleRecaptchaError}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting || !recaptchaToken}
                    className={`flex items-center gap-2 py-2.5 px-6 rounded-lg border ${
                      isSubmitting || !recaptchaToken
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-gray-950 hover:bg-gray-800"
                    } text-white border-gray-600 transition-colors group`}
                  >
                    {isSubmitting ? (
                      <>
                        Send{" "}
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        Send{" "}
                        <FiSend className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={isSubmitting}
                    className="py-2.5 px-6 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-500 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
