function showContent(sectionId) {
    // Oculta todos os conteúdos
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
    
    // Mostra o conteúdo da seção selecionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}