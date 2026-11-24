
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const themeToggle = document.getElementById("themeToggle");
  const printBtn = document.getElementById("printBtn");
  const backTop = document.getElementById("backTop");

  // السنة الحالية
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // التبديل بين المظهر الداكن والفاتح
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const lightMode = document.body.classList.contains("light");
    themeToggle.textContent = lightMode ? "☼" : "◐";
    themeToggle.setAttribute(
      "aria-label",
      lightMode ? "التبديل إلى المظهر الداكن" : "التبديل إلى المظهر الفاتح"
    );
  });

  // طباعة السيرة أو حفظها PDF
  printBtn?.addEventListener("click", () => {
    window.print();
  });

  // إظهار الأقسام عند التمرير
  const sections = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sections.forEach(section => observer.observe(section));
  } else {
    sections.forEach(section => section.classList.add("visible"));
  }

  // زر العودة إلى أعلى الصفحة
  function updateBackTop() {
    backTop?.classList.toggle("show", window.scrollY > 400);
  }

  window.addEventListener("scroll", updateBackTop, { passive: true });
  updateBackTop();

  backTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
