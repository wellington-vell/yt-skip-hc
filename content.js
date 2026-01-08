(function () {
  "use strict";

  function clickContinueButton() {
    const container = document.querySelector(
      "#player-error-message-container.yt-player-error-message-renderer"
    );
    if (!container) {
      return false;
    }

    const button = container.querySelector("#button button");
    if (button && !button.disabled) {
      button.click();
      return true;
    }

    return false;
  }

  let observer = null;
  let checkInterval = null;
  const timer = 500;

  function stopMonitoring() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (checkInterval) {
      clearInterval(checkInterval);
      checkInterval = null;
    }
  }

  function startMonitoring() {
    if (observer || checkInterval) {
      return;
    }

    observer = new MutationObserver((mutations, obs) => {
      if (clickContinueButton()) {
        stopMonitoring();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    checkInterval = setInterval(() => {
      if (clickContinueButton()) {
        stopMonitoring();
      }
    }, timer);
  }

  if (clickContinueButton()) {
    return;
  }

  startMonitoring();

  window.addEventListener("beforeunload", () => {
    stopMonitoring();
  });
})();
