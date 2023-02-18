import { useState } from "preact/hooks";

export default function Form() {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (!formData.get("email")) {
      setError("input required");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xknanqyl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        setResponse("There was an error, please try again later.");
        return;
      }
      setResponse("Thank you for your message, it has been sent successfully.");
    } catch (error) {
      setResponse("There was an error, please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResponse("");
      }, 6000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <p
        className={`text-center ${
          response.includes("error") ? "text-red-500" : "text-emerald-500"
        }`}
      >
        {response}
      </p>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-sky-200" htmlFor="name">
          Name
        </label>
        <input
          className="bg-transparent border rounded-md py-4 px-5 focus:border-cyan-400 outline-none font-medium text-base focus:bg-transparent selection:bg-transparent active:bg-transparent"
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-sky-200" htmlFor="email">
          Email
        </label>
        <input
          className={`bg-transparent border rounded-md py-4 px-5 focus:border-cyan-400 outline-none font-medium text-base ${
            error ? "border-red-500" : ""
          }`}
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
        />
        <span className="inline-block text-right font-medium text-sm text-red-500 h-5">
          {error}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-sky-200" htmlFor="message">
          Message
        </label>
        <textarea
          className="bg-transparent border rounded-md py-4 px-5 focus:border-cyan-400 outline-none font-medium text-base h-40"
          name="message"
          id="message"
        />
      </div>

      <input
        className="bg-gradient-to-r from-emerald-400 to-cyan-400 py-4 rounded-md text-lg font-medium text-neutral-800 cursor-pointer"
        type="submit"
        disabled={loading}
        value={loading ? "Sending..." : "Submit"}
      />
    </form>
  );
}
