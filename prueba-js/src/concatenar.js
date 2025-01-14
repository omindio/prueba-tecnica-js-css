function capitalize(word) {
  if (!word) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default (json) => {
  return json.map((person) => {
    const nombre = capitalize(person.nombre);
    const apellido = capitalize(person.apellido);
    const apellido2 = capitalize(person.apellido2);

    return `${nombre} ${apellido} ${apellido2}`.trim();
  });
};
