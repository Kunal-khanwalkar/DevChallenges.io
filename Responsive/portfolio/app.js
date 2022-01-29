const buttons = document.querySelectorAll('.project_type');
const projects = document.querySelectorAll('.project_list');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {                
        refresh();
        button.classList.add('is-info');        
        const project = [...projects].filter(project => project.id === button.innerHTML)[0];        
        project.classList.remove('hidden');
    });
})

const refresh = () => {
    buttons.forEach(button => {
        button.classList.remove('is-info');        
    });  
    projects.forEach(project => {
        project.classList.add('hidden');
    });
}