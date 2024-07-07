export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

export const formatPhone = (phone) => {
  const cleaned = ("" + phone).replace(/\D/g, "");
  return cleaned.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
};
