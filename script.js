// Function to create a new project
function createProject() {
    const projectName = document.getElementById('projectName').value.trim();
    const projectPath = document.getElementById('projectPath').value.trim();
  
    if (!projectName || !projectPath) {
      alert('Please enter project name and path.');
      return;
    }
  
    // Create a new project object
    const newProject = {
      name: projectName,
      path: projectPath,
    };
  
    // Save the project data to local storage
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  
    // Clear the input fields
    document.getElementById('projectName').value = '';
    document.getElementById('projectPath').value = '';
  
    // Refresh the list of open projects
    updateOpenProjectsList();
  }
  
  // Function to open an existing project
  function openProject() {
    const selectElement = document.getElementById('openProjectSelect');
    const selectedProjectIndex = selectElement.selectedIndex;
    if (selectedProjectIndex === -1) {
      alert('Please select a project to open.');
      return;
    }
  
    const projects = JSON.parse(localStorage.getItem('projects'));
    const selectedProject = projects[selectedProjectIndex];
  
    // Perform actions to open the selected project
    alert(`Opening project: ${selectedProject.name} at path: ${selectedProject.path}`);
  }
  
  // Function to update the list of open projects in the dropdown
  function updateOpenProjectsList() {
    const selectElement = document.getElementById('openProjectSelect');
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
  
    // Clear existing options
    selectElement.innerHTML = '';
  
    // Add new options for each project
    projects.forEach((project) => {
      const option = document.createElement('option');
      option.text = project.name;
      selectElement.add(option);
    });
  }
  
  // Initialize the open projects list when the page loads
  document.addEventListener('DOMContentLoaded', updateOpenProjectsList);
  