function showSection(sectionId) {
  const sections = ['about', 'projects', 'contact'];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
  });
}
