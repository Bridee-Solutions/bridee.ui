import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./ListaTarefas.module.css";
import "../../index.css";
import { request } from "../../config/axios/axios";
import Navbar from "../../componentes/Navbar/Navbar";
import OpcaoFiltro from "../../componentes/OpcoesFiltro/OpcaoFiltro";
import TaskList from "../../componentes/Tasks/TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import {
  faMagnifyingGlass,
  faTriangleExclamation,
  faTag,
  faCalendar,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../../componentes/Modal/Modal";
import ModalHeader from "../../componentes/Modal/ModalHeader/ModalHeader";
import ModalBody from "../../componentes/Modal/ModalBody/ModalBody";
import ModalFooter from "../../componentes/Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../../componentes/Modal/ModalFooterButton/ModalFooterButton";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";

function ListaTarefas() {
  useEffect(() => {
    loadTasks();
  }, []);
  const [checkedCount, setCheckedCount] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalAddTask, setModalAddTask] = useState(false);
  const [modalViewTask, setModalViewTask] = useState(false);
  const [taskDate, setTaskDate] = useState("Selecione uma data");
  const [task, setTask] = useState("");
  const [gruposDeTarefas, setGruposDeTarefas] = useState([]);
  const [filters, setFilters] = useState({});
  const searchTaskInputRef = useRef(null);
  const nameTaskSave = useRef(null);
  const descriptionTaskSave = useRef(null);
  const dateTaskSave = useRef(null);
  const categoryTaskSave = useRef(null);
  const nameTaskView = useRef(null);
  const descriptionTaskView = useRef(null);
  const dateTaskView = useRef(null);
  const categoryTaskView = useRef(null);
  useEffect(() => {
    loadTasks();
  }, [filters]);

  const abrirModalDelete = (task) => {
    setTask(task);
    setModalDelete(true);
  };

  const abrirModalAdd = () => {
    const today = new Date();
    setTaskDate(today);
    setModalAddTask(true);
  };

  const abrirModalView = (task) => {
    setTask(task);
    setTaskDate(task.dataLimite);
    setModalViewTask(true);
  };

  const changeDate = (e) => {
    setTaskDate(e.target.value);
  };

  const handleLabelClick = () => {
    if (dateTaskSave.current) {
      dateTaskSave.current.showPicker();
    } else if (dateTaskView.current) {
      dateTaskView.current.showPicker();
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Selecione uma data";

    const [year, month, day] = String(dateString).split("-");

    if (!year || !month || !day) return "Selecione uma data";

    const date = new Date(year, month - 1, day);

    if (isNaN(date.getTime())) {
      return "Selecione uma data";
    }

    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatDateTaskListTitle = (data) => {
    const [ano, mesTexto] = data.split("-");
    const meses = {
      janeiro: 0,
      fevereiro: 1,
      marco: 2,
      abril: 3,
      maio: 4,
      junho: 5,
      julho: 6,
      agosto: 7,
      setembro: 8,
      outubro: 9,
      novembro: 10,
      dezembro: 11,
    };

    const mesIndex = meses[mesTexto.toLowerCase()];
    if (mesIndex === undefined) return data;

    const date = new Date(ano, mesIndex);
    const options = { year: "numeric", month: "long" };
    const dataFormatada = new Intl.DateTimeFormat("pt-BR", options).format(
      date
    );

    return dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
  };

  const fecharModalAdd = () => {
    setModalAddTask(false);
  };

  const fecharModalDelete = () => {
    setModalDelete(false);
    setTask("");
  };

  const fecharModalView = () => {
    setModalViewTask(false);
    setTask("");
  };

  const statusOptions = ["Concluída", "Em andamento"];
  const monthOptions = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const categoryOptions = [
    "Fotografia",
    "Cabelo e maquiagem",
    "Vestidos",
    "Locais",
    "Música",
    "Planejador",
  ];

  let countTasks = gruposDeTarefas.reduce((total, group) => {
    const monthlyTasks = Object.values(group.tarefas);
    const groupTotal = monthlyTasks.reduce(
      (monthTotal, tasks) => monthTotal + tasks.length,
      0
    );
    return total + groupTotal;
  }, 0);

  const saveTask = () => {
    let newTask = {
      nome: nameTaskSave.current.value,
      descricao: descriptionTaskSave.current.value,
      categoria: categoryTaskSave.current.value,
      status: "EM_ANDAMENTO",
      dataLimite: dateTaskSave.current.value,
    };

    request
      .saveTask(3, newTask)
      .then(() => {
        fecharModalAdd();
        loadTasks();
        toast.success("Tarefa criada com sucesso!");
      })
      .catch(() => {
        if (!newTask.nome || !newTask.dataLimite || !newTask.status) {
          toast.error("Preencha todos os campos");
        } else {
          toast.error("Houve um erro ao criar a tarefa");
        }
      });
  };

  const atualizarTask = () => {
    const updatedTask = {
      id: task.id,
      nome: nameTaskView.current.value,
      descricao: descriptionTaskView.current.value,
      categoria: categoryTaskView.current.value,
      status: task.status,
      dataLimite: taskDate,
      mesesAnteriores: task.mesesAnteriores,
    };

    console.log(updatedTask);
    request
      .updateTask(3, updatedTask)
      .then(() => {
        loadTasks();
        fecharModalView();
        toast.success("Tarefa atualizada com sucesso!");
      })
      .catch(() => {
        if (
          !updatedTask.nome ||
          !updatedTask.dataLimite ||
          !updatedTask.status
        ) {
          toast.error("Preencha todos os campos");
        } else {
          toast.error("Houve um erro ao criar a tarefa");
        }
      });
  };

  const loadTasks = () => {
    const isEmpty =
      Object.keys(filters).length === 0 && filters.constructor === Object;

    if (isEmpty) {
      request
        .getTasks(3)
        .then((data) => {
          const tarefas = data.data;
          const totalChecked = tarefas.reduce((count, group) => {
            return (
              count +
              Object.values(group.tarefas).reduce((monthCount, tasks) => {
                return (
                  monthCount +
                  tasks.filter((task) => task.status === "CONCLUIDO").length
                );
              }, 0)
            );
          }, 0);

          setGruposDeTarefas(tarefas);
          setCheckedCount(totalChecked);
        })
        .catch(() => {
          toast.error("Houve um erro ao carregar as tarefas");
        });
    } else {
      let uri = "?";
      if (filters.nome) uri += `nome=${filters.nome}&`;
      if (filters.status) uri += `status=${filters.status}&`;
      if (filters.categoria && filters.categoria.length > 0) {
        uri += "categoria=";
        for (let i = 0; i < filters.categoria.length; i++) {
          uri += filters.categoria[i];
          if (i < filters.categoria.length - 1) uri += ",";
        }
        uri += "&";
      }
      if (filters.mes && filters.mes.length > 0) {
        uri += "mes=";
        for (let i = 0; i < filters.mes.length; i++) {
          uri += filters.mes[i];
          if (i < filters.mes.length - 1) uri += ",";
        }
        uri += "&";
      }

      if (uri.endsWith("&")) {
        uri = uri.slice(0, -1);
      }
      console.log(uri);
      request
        .getTasks(3, uri)
        .then((data) => {
          const tarefas = data.data;
          const totalChecked = tarefas.reduce((count, group) => {
            return (
              count +
              Object.values(group.tarefas).reduce((monthCount, tasks) => {
                return (
                  monthCount +
                  tasks.filter((task) => task.status === "CONCLUIDO").length
                );
              }, 0)
            );
          }, 0);

          setGruposDeTarefas(tarefas);
          setCheckedCount(totalChecked);
        })
        .catch(() => {
          toast.error("Houve um erro ao carregar as tarefas");
        });
    }
  };

  const getAllOverdueTasks = (grupos) => {
    return grupos.flatMap((grupo) => grupo.tarefas.atrasadas);
  };

  const overdueTasks = getAllOverdueTasks(gruposDeTarefas);

  const searchTask = () => {
    let filter = { ...filters };

    filter.nome = searchTaskInputRef.current.value;
    setFilters(filter);
  };

  const configFilters = (title, option) => {
    let filter = { ...filters };

    switch (title) {
      case "Mês":
        if (option instanceof Set) {
          filter.mes = Array.from(option).map((val) => val + 1);
        } else {
          delete filter.mes;
        }
        break;

      case "Status":
        if (option === 0) {
          filter.status = "CONCLUIDO";
        } else if (option === 1) {
          filter.status = "EM_ANDAMENTO";
        } else {
          delete filter.status;
        }
        break;

      case "Categoria":
        if (option instanceof Set) {
          filter.categoria = Array.from(option).map((val) =>
            categoryOptions[val].toUpperCase().replace(/ /g, "_")
          );
        } else {
          delete filter.categoria;
        }
        break;
    }

    setFilters(filter);
  };

  const checkTask = (isChecked, task) => {
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));

    if (task.status == "EM_ANDAMENTO") task.status = "CONCLUIDO";
    else task.status = "EM_ANDAMENTO";

    request
      .updateTask(3, task)
      .then(() => {
        loadTasks();
      })
      .catch(() => {
        toast.error("Houve um erro ao atualizar a tarefa");
      });
  };

  const deleteTask = (id) => {
    request
      .deleteTask(id)
      .then(() => {
        toast.success("Tarefa deletada com sucesso");
        loadTasks();
        fecharModalDelete();
      })
      .catch(() => {
        toast.error("Houve um erro ao deletar a tarefa");
      });
  };

  return (
    <div className={styles["lista-de-tarefas"]}>
      <Navbar />
      <div className={styles.conteudo}>
        <div className={styles.tituloPage}>
          <p>
          Painel {">"} Ferramentas de planejamento {">"} <b>Lista de tarefas</b>
          </p>
        </div>
        <div className={styles["card-fundo"]}>
          <div className={styles.header}>
            <p className={styles.tituloLista}>Lista de tarefas</p>

            <div className={styles.progress_bar_container}>
              <div className={styles.progress_bar}>
                <div
                  className={styles.progress}
                  style={{ width: `${(checkedCount / countTasks) * 100}%` }}
                ></div>
              </div>
              <p>
                {checkedCount} de {countTasks} tarefas concluídas
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div>
              <div className={styles.subtitulo}>
                <p> FILTROS </p>
              </div>
              <div className={styles.filtros}>
                <OpcaoFiltro
                  title="Status"
                  options={statusOptions}
                  singleSelection={true}
                  filterSelection={configFilters}
                />
                <OpcaoFiltro
                  title="Mês"
                  options={monthOptions}
                  filterSelection={configFilters}
                />
                <OpcaoFiltro
                  title="Categoria"
                  options={categoryOptions}
                  filterSelection={configFilters}
                />
              </div>
            </div>

            <div className={styles.tasksList}>
              <label htmlFor="taskSearchBar" className={styles.searchBar}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  name="task-search-bar"
                  id="taskSearchBar"
                  onChange={searchTask}
                  ref={searchTaskInputRef}
                  placeholder="Pesquisar tarefa"
                />
              </label>
              <div className={styles.list}>
                {gruposDeTarefas.length == 0 && (
                  <div key="task">
                    <h2>Criar nova tarefa</h2>
                    <TaskList tasks={[]} onCreate={abrirModalAdd} />
                  </div>
                )}

                {overdueTasks.length > 0 && (
                  <div key="atrasadas">
                    <h2>Tarefas atrasadas</h2>
                    <TaskList
                      tasks={overdueTasks}
                      onCheckboxChange={checkTask}
                      onView={abrirModalView}
                      onDelete={abrirModalDelete}
                      onCreate={abrirModalAdd}
                    />
                  </div>
                )}

                {gruposDeTarefas.map((grupo) =>
                  Object.entries(grupo.tarefas).map(
                    ([mes, tarefas]) =>
                      mes !== "atrasadas" &&
                      tarefas.length > 0 && (
                        <div key={`${grupo.ano}-${mes}`}>
                          <h2>
                            {formatDateTaskListTitle(`${grupo.ano}-${mes}`)}
                          </h2>
                          <TaskList
                            tasks={tarefas}
                            onCheckboxChange={checkTask}
                            onView={abrirModalView}
                            onDelete={abrirModalDelete}
                            onCreate={abrirModalAdd}
                          />
                        </div>
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalAddTask && (
        <Modal>
          <ModalHeader onClose={fecharModalAdd}>
          <div className={styles.visutarefa}>
              <div className={styles.titulo}>
                <span>Criar tarefa</span>
              </div>
              <div className={styles.modal_header_close}>
                <FontAwesomeIcon icon={faX} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className={styles.containerModalCreate}>
              <div className={styles.contregs}>
                <p>Nome da tarefa</p>
                <input type="text" ref={nameTaskSave} />
              </div>
              <div className={styles.descriptionContainer}>
                <p>Descrição da tarefa personalizada</p>
                <textarea
                  type="text"
                  className={styles.description}
                  defaultValue={task.descricao}
                  ref={descriptionTaskSave}
                />
              </div>
              <div className={styles.containerDateTag}>
                <div className={styles.containerModal}>
                  <div className={styles.containerData}>
                    <p>Data</p>
                  </div>
                  <div className={styles.calendario} onClick={handleLabelClick}>
                    <input
                      type="date"
                      ref={dateTaskSave}
                      id="dateTaskInput"
                      onChange={changeDate}
                      value={taskDate}
                      style={{ opacity: 0, position: "absolute", width: 0 }}
                    />
                    <label htmlFor="dateTaskInput">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{formatDate(taskDate)}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div className={styles.containerModalSelect}>
                    <div className={styles.containerData}>
                      <p>Categoria</p>
                    </div>
                    <div className={styles.aquiii}>
                      <FontAwesomeIcon icon={faTag} />
                      <select ref={categoryTaskSave}>
                        <option value="FOTOGRAFIA">Fotografia</option>
                        <option value="CABELO_E_MAQUIAGEM">
                          Cabelo e Maquiagem
                        </option>
                        <option value="VESTIDOS">Vestidos</option>
                        <option value="LOCAIS">Locais</option>
                        <option value="MUSICA">Musica</option>
                        <option value="PLANEJADOR">Planejador</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalFooterButton
              button="cancel_button"
              text="Cancelar"
              onClick={fecharModalAdd}
            />
            <ModalFooterButton
              button="add_button"
              text="Salvar"
              onClick={saveTask}
            />
          </ModalFooter>
        </Modal>
      )}

      {modalDelete && (
        <Modal>
          <ModalHeader onClose={fecharModalDelete}>
          <div className={styles.visutarefa}>
              <div className={styles.titulo}>
                <span>Remover tarefa</span>
              </div>
              <div className={styles.modal_header_close}>
                <FontAwesomeIcon icon={faX} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className={styles.containerModalDelete}>
              <div>
                <FontAwesomeIcon
                  className={styles.iconAlert}
                  icon={faTriangleExclamation}
                  style={{ color: "#FF5154" }}
                />
                <p>Deseja remover a tarefa "{task.nome}?"</p>
                <span>
                  Você não poderá recuperá-lo novamente após a exclusão.
                </span>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalFooterButton
              button="cancel_button"
              text="Cancelar"
              onClick={fecharModalDelete}
            />
            <ModalFooterButton
              button="delete_button"
              text="Deletar"
              onClick={() => deleteTask(task.id)}
            />
          </ModalFooter>
        </Modal>
      )}

      {modalViewTask && (
        <Modal>
          <ModalHeader onClose={fecharModalView}>
            <div className={styles.visutarefa}>
              <div className={styles.titulo}>
                <span>Visualizar tarefa</span>
              </div>
              <div className={styles.modal_header_close}>
                <FontAwesomeIcon icon={faX} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className={styles.containerModalCreate}>
              <div>
                <p>Nome da tarefa</p>
                <label htmlFor="nameTaskView" className={styles.labelTaskView}>
                  <input
                    type="text"
                    id="nameTaskView"
                    ref={nameTaskView}
                    defaultValue={task.nome}
                  />
                  <FontAwesomeIcon icon={faPen} />
                </label>
              </div>
              <div className={styles.descriptionContainer}>
                <p>Descrição da tarefa personalizada</p>
                <label
                  className={styles.labelTaskView}
                  htmlFor="descriptionTaskView"
                >
                  <textarea
                    type="text"
                    id="descriptionTaskView"
                    className={styles.description}
                    defaultValue={task.descricao}
                    ref={descriptionTaskView}
                  />
                  <FontAwesomeIcon icon={faPen} />
                </label>
              </div>
              <div className={styles.containerDateTag}>
                <div className={styles.containerModal}>
                  <div className={styles.containerData}>
                    <p>Data</p>
                  </div>
                  <div className={styles.calendario} onClick={handleLabelClick}>
                    <input
                      type="date"
                      ref={dateTaskView}
                      id="dateTaskView"
                      onChange={changeDate}
                      style={{ opacity: 0, position: "absolute", width: 0 }}
                    />
                    <label htmlFor="dateTaskView">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{formatDate(taskDate)}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div className={styles.containerModalSelect}>
                    <div className={styles.containerData}>
                      <p>Categoria</p>
                      <div>
                        <div className={styles.aquiii}>
                          <FontAwesomeIcon icon={faTag} />
                          <select
                            ref={categoryTaskView}
                            defaultValue={task.categoria}
                          >
                            <option value="FOTOGRAFIA">Fotografia</option>
                            <option value="CABELO_E_MAQUIAGEM">
                              Cabelo e Maquiagem
                            </option>
                            <option value="VESTIDOS">Vestidos</option>
                            <option value="LOCAIS">Locais</option>
                            <option value="MUSICA">Musica</option>
                            <option value="PLANEJADOR">Planejador</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalFooterButton
              button="cancel_button"
              text="Cancelar"
              onClick={fecharModalAdd}
            />
            <ModalFooterButton
              button="add_button"
              text="Salvar"
              onClick={atualizarTask}
            />
          </ModalFooter>
        </Modal>
      )}
      <Baseboard />
    </div>
  );
}

export default ListaTarefas;
