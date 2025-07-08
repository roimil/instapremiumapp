// Audio de caixa registradora em formato Base64
// Som de caixa registradora curto que será tocado durante a animação de contagem do valor
export const cashRegisterSound = {
  play() {
    if (typeof window !== 'undefined') {
      try {
        // Base64 de um som curto de caixa registradora
        const base64Sound = "SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMAVFlFUgAAAAoAAABTb3VuZEpheQBUQ09OAAAAGgAAAFNGWCAtIENhcnRvb25zIDogQ29pbiBGbGlwAFRJVDIAAAAQAAAAQ29pbiByZWdpc3RlciBnAFRTUzgAAAAUAAABc291bmRqYXkuY29tAP/7kGQAD/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAQAAA/wAAAADGsHQrCzBvAEQSBGGQDCAYEARMydQyKYQQmBETJ1FIZIomCERdQwDIZFQGCuChiTA4BoMEIGA+AoIgKYLQPBECzA/BoIgAYKQNBYCwQA0YCgBgaAJgJAEQBQwcO2/FxukuZdi13Re1MLuq5Bjch3JdyHND/+5JkNo/0cmrFU93jcAAADSAAAAEPtXsgT1iNwAAANIAAAAQS7kO5DvRJoe9HvR70Sd6Pe9xdF3os90XvRd6LvRZ7AYcUO/FxkCLjIEXYl3ou9F73ou9F7GQLsS73ou9F3vcXRd6Luz3uu7PfA3ve973HdHve973veH+gA0ANAAaDQA0AAoAaAAA=";
        const audio = new Audio("data:audio/wav;base64," + base64Sound);
        audio.play();
      } catch (err) {
        console.error('Erro ao tocar som:', err);
      }
    }
  }
};
