(function () {
  const params = typeof ctx === "object" && ctx && ctx.params ? ctx.params : {};
  const decode = (value) => {
    const bytes = Uint8Array.from(atob(value || ""), (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  };
  const username = decode(params.username_b64);
  const password = decode(params.password_b64);

  const setValue = (element, value) => {
    if (!element) return false;
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set;
    setter?.call(element, value);
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  };

  const fill = () => {
    const userInput = document.querySelector(
      'input[autocomplete="username"], input[type="text"]'
    );
    const passwordInput = document.querySelector(
      'input[autocomplete="current-password"], input[type="password"]'
    );
    if (!setValue(userInput, username) || !setValue(passwordInput, password)) return false;
    document.querySelector('button[type="submit"]')?.click();
    return true;
  };

  if (!fill()) {
    const observer = new MutationObserver(() => {
      if (fill()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
  }
})();
