export default (json) => {
  const totalEdades = json.reduce((total, person) => total + person.edad, 0);
  const media = totalEdades / json.length;
  return media;
};
