// Elhabib Delivery

console.log("Elhabib Delivery جاهز ✅");

// تأثير بسيط عند الضغط على الأزرار
document.querySelectorAll(".btn, .btn2").forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked");
    });
});
