export function renderContact(): string {
  return `
    <section id="contact" class="relative py-20 lg:py-28 bg-[#0B0F19] border-t border-slate-800/60 overflow-hidden">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">Get in Touch</h2>
          <p class="text-base sm:text-lg text-cyan-400 font-medium mt-2 mb-8">
            Have a project in mind or looking for a software engineer? Send a message and I will get back to you promptly.
          </p>
        </header>

        <form id="contact-form" novalidate class="w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7 lg:p-8 shadow-lg">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="contact-name" class="mb-2 block text-sm font-semibold text-slate-200">Name</label>
                <input id="contact-name" name="name" type="text" autocomplete="name" required
                  class="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Your name">
              </div>
              <div>
                <label for="contact-email" class="mb-2 block text-sm font-semibold text-slate-200">Email</label>
                <input id="contact-email" name="email" type="email" autocomplete="email" required
                  class="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="you@example.com">
              </div>
            </div>

            <div class="mt-5">
              <label for="contact-subject" class="mb-2 block text-sm font-semibold text-slate-200">Subject</label>
              <select id="contact-subject" name="subject"
                class="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors">
                <option value="Web Application">Web Application</option>
                <option value="Commercial System">Commercial System</option>
                <option value="Technical Consultation">Technical Consultation</option>
                <option value="Opportunity">Opportunity</option>
              </select>
            </div>

            <div class="mt-5">
              <label for="contact-message" class="mb-2 block text-sm font-semibold text-slate-200">Message</label>
              <textarea id="contact-message" name="message" required rows="5"
                class="w-full resize-y rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                placeholder="Tell me about your project or opportunity"></textarea>
            </div>

            <div class="mt-6">
              <button id="contact-submit" type="submit"
                class="min-h-12 w-full sm:w-auto rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-400 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 transition-colors">
                Send Message
              </button>
              <p id="contact-status" role="status" aria-live="polite" class="mt-4 min-h-6 text-sm"></p>
            </div>
        </form>
      </div>
    </section>
  `;
}

export function initContact(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;

  const submitButton = document.getElementById("contact-submit") as HTMLButtonElement | null;
  const status = document.getElementById("contact-status") as HTMLParagraphElement | null;
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  const setStatus = (message: string, kind: "success" | "error" | "neutral"): void => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove("text-cyan-400", "text-red-400", "text-slate-400");
    status.classList.add(kind === "success" ? "text-cyan-400" : kind === "error" ? "text-red-400" : "text-slate-400");
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete the required fields with valid information.", "error");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.message) {
      setStatus("Name and message cannot be empty.", "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    setStatus("Sending your message...", "neutral");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Message endpoint returned an error.");
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 600));
      }

      form.reset();
      setStatus("Thank you. Your message has been sent successfully.", "success");
    } catch {
      setStatus("Sorry, your message could not be sent. Please try again.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }
    }
  });
}