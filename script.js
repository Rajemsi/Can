// BURADAKİ BİLGİLERİ DEĞİŞTİR
const AD_SOYAD = "Can Açıkalın";
const IBAN = "TR88 5000 0000 0981 6266 9000 03";

document.getElementById("name").textContent = AD_SOYAD;
document.getElementById("iban").textContent = IBAN;

document.getElementById("copyBtn").addEventListener("click", async () => {
  const status = document.getElementById("status");

  try {
    await navigator.clipboard.writeText(IBAN.replaceAll(" ", ""));
    status.textContent = "IBAN kopyalandı ✓";
  } catch {
    status.textContent = "Kopyalama başarısız. IBAN'ı elle seçebilirsiniz.";
  }

  setTimeout(() => {
    status.textContent = "";
  }, 2500);
});
