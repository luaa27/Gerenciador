new Vue({
    el: '#app',
    data: {
      tasks: [
        // Aqui você pode ter as tarefas iniciais carregadas do servidor
      ],
      newTask: {
        title: '',
        description: '',
        dueDate: ''
      },
      showForm: false
    },
    methods: {
      addTask() {
        // Aqui você pode enviar a nova tarefa para o servidor e adicionar à lista
        this.tasks.push({
          title: this.newTask.title,
          description: this.newTask.description,
          dueDate: this.newTask.dueDate
        });
        // Limpa o formulário
        this.newTask.title = '';
        this.newTask.description = '';
        this.newTask.dueDate = '';
        this.showForm = false;
      },
      editTask(index) {
        // Aqui você pode implementar a lógica de edição da tarefa
        console.log('Editar tarefa:', this.tasks[index]);
      },
      deleteTask(index) {
        // Aqui você pode implementar a lógica para excluir a tarefa
        this.tasks.splice(index, 1);
      }
    }
  });
  