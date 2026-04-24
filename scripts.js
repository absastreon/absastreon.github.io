/* ──────────────────────────────────────────────────────────
   Portfolio — small runtime helpers.
   Click-to-copy for .cli-box elements with a data-copy attribute.
   ────────────────────────────────────────────────────────── */

(function () {
  "use strict";

  var boxes = document.querySelectorAll(".cli-box[data-copy]");
  if (!boxes.length) return;

  Array.prototype.forEach.call(boxes, function (box) {
    var hint = box.querySelector(".copy-hint");
    var originalHint = hint ? hint.textContent : "";
    var timer = null;

    // Make it behave like a button for keyboards and screen readers.
    box.setAttribute("role", "button");
    box.setAttribute("tabindex", "0");
    box.setAttribute(
      "aria-label",
      "Copy command: " + box.getAttribute("data-copy")
    );

    function flashCopied() {
      box.classList.add("cli-box-copied");
      if (hint) hint.textContent = "✓ Copied";
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        box.classList.remove("cli-box-copied");
        if (hint) hint.textContent = originalHint;
      }, 1600);
    }

    function fallbackCopy(text) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        flashCopied();
      } catch (e) {
        /* give up silently */
      }
      document.body.removeChild(ta);
    }

    function copy() {
      var text = box.getAttribute("data-copy");
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(flashCopied, function () {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }
    }

    box.addEventListener("click", copy);
    box.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        copy();
      }
    });
  });
})();
