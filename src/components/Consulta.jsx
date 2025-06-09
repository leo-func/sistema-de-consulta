import React, { useState } from 'react'
import './Consulta.css'

function Consulta() {

    // Estado para armazenar os dados do formulário do paciente
    const [form, setForm] = useState({
        name: "",
        age: "",
        address: "",
        time: "",
        weekday: ""
    });

    // Função para lidar com mudanças nos inputs do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Impedindo que idade seja negativa ou maior que 120
        if (name === "age") {
            const age = parseInt(value);
            if (age < 0 || age > 120) 
                return;
        }

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    // Lista de pacientes cadastrados inicialmente
    const [patients, setPatients] = useState([
        { time: '9:00', name: 'Carlos Silva', age: 21, weekday: "Segunda" },
        { time: '10:00', name: 'Maria Sousa', age: 19, weekday: "Terça" },
        { time: '11:30', name: 'Antônio Lima', age: 42, weekday: "Sexta" }
    ]);

    // Função para salvar novo paciente
    const handleSave = () => {
        const newPatient = {
            time: form.time || "00:00",
            name: form.name,
            age: form.age,
            address: form.address,
            weekday: form.weekday
        };

        setPatients(prev => [...prev, newPatient]);
        setForm({ name: "", age: "", address: "", time: "", weekday: "" }); // Resetando o formulário
    };

    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    const [formStep, setFormStep] = useState("form"); // Etapa atual do formulário
    const [selectedPatient, setSelectedPatient] = useState(null); // Paciente selecionado pra ver detalhes
    const [selectedDay, setSelectedDay] = useState("Segunda"); // Dia da semana selecionado

    // Função para excluir paciente
    const handleDelete = (indexToRemove) => {
        setPatients((prevPatients) =>
            prevPatients.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <div>
            {/* INÍCIO: Container principal da página de consulta */}
            <div className="consulta-container">

                {/* INÍCIO: Cabeçalho */}
                <div className="header">
                    <div className="Mphoto">
                        {/* Aqui poderia colocar a foto do perfil do médico ou algo similar */}
                    </div>
                </div>
                {/* FIM: Cabeçalho */}

                {/* INÍCIO: Botão para iniciar cadastro de novo paciente */}
                <div className="Mbutton">
                    <button className="new-patient" onClick={() =>
                        setForm({ name: "", age: "", address: "", time: "", weekday: "" })
                    }>
                        <h4>Limpar Campos</h4>
                    </button>
                </div>
                {/* FIM: Botão para novo paciente */}

                {/* INÍCIO: Área que contém o formulário + agenda */}
                <div className="patient-and-schedule">

                    {/* INÍCIO: Formulário de cadastro de paciente */}
                    <div className="Mregister-patient-form">
                        {formStep == "form" && (
                            // INÍCIO: Primeira parte do formulário (dados pessoais)
                            <div className="mRegister-patient-form">
                                <h2>Cadastrar Paciente</h2>

                                <h4>Nome</h4>
                                <input type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                                <h4>Idade</h4>
                                <input type="number"
                                    name="age"
                                    value={form.age}
                                    onChange={handleChange}
                                />

                                <h4>Endereço</h4>
                                <input type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                />

                                {/* Botão para ir para próxima etapa do formulário */}
                                <div className="Mright-arrow">
                                    <button className='right-arrow' onClick={() => setFormStep("schedule")}>{">"}</button>
                                </div>
                            </div>
                            // FIM: Primeira parte do formulário
                        )}

                        {formStep == "schedule" && (
                            // INÍCIO: Segunda parte do formulário (agendamento)
                            <div className="scheduling">
                                <h2>Cadastrar Paciente</h2>

                                <h4>Horário</h4>
                                <input type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                />

                                <h4>Dia</h4>
                                <select
                                    name="weekday"
                                    value={form.weekday}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecione o dia</option>
                                    {days.map((day) => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>

                                {/* Botão para salvar paciente */}
                                <button className="save-button" onClick={handleSave}>
                                    <h2>Registrar</h2>
                                </button>

                                {/* Botão para voltar à etapa anterior */}
                                <div className="Mleft-arrow">
                                    <button className='left-arrow' onClick={() => setFormStep("form")}>{"<"}</button>
                                </div>
                            </div>
                            // FIM: Segunda parte do formulário
                        )}

                        {formStep == "patient-info" && (
                            // INÍCIO: Visualização das informações do paciente selecionado
                            <div className="Mpatient-info">
                                <div className="mPatient-info">

                                    {/* Botão de fechar */}
                                    <button className='exited-button' onClick={() => setFormStep("form")}>{"X"}</button>

                                    <h2>Nome: {selectedPatient.name || "Indisponível"}</h2>
                                    <h2>Idade: {selectedPatient.age || "Indisponível"}</h2>
                                    <h2>Endereço: {selectedPatient.address || "Indisponível"}</h2>
                                    <h2>Horário: {selectedPatient.time}</h2>

                                    {/* Botão para excluir paciente */}
                                    <button
                                        className='delete-button'
                                        onClick={() => {
                                            const indexToRemove = patients.findIndex(p => p.name === selectedPatient.name && p.time === selectedPatient.time);
                                            handleDelete(indexToRemove);
                                            setFormStep("form");
                                        }}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                            // FIM: Visualização do paciente
                        )}
                    </div>
                    {/* FIM: Formulário de cadastro de paciente */}

                    {/* INÍCIO: Seção da agenda */}
                    <div className="Mschedule-section">
                        <div className="mSchedule-section">
                            <h2>Agenda</h2>

                            {/* INÍCIO: Botões com os dias da semana */}
                            <div className="weekdays">
                                {days.map((day) => (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={selectedDay === day ? "selected" : ""}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                            {/* FIM: Botões com os dias da semana */}

                            <p>{selectedDay}-feira</p>

                            {/* INÍCIO: Lista de pacientes do dia selecionado */}
                            <div className="consultations">
                                {patients.filter((patient) => patient.weekday === selectedDay).length === 0 && (
                                    <p>Nenhum paciente agendado para {selectedDay}.</p>
                                )}

                                {patients
                                    .filter((patient) => patient.weekday === selectedDay)
                                    .map((patient, index) => (
                                        <div className="Mpatients" key={index}>
                                            <div className="mPatients">
                                                <div className="info">
                                                    <h2>{patient.time}</h2> <h2>{patient.name}</h2>
                                                </div>

                                                {/* Botão para visualizar os dados do paciente */}
                                                <button className='edit-button' onClick={() => {
                                                    setFormStep("patient-info");
                                                    setSelectedPatient(patient);
                                                }}>
                                                    Ver
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {/* FIM: Lista de pacientes */}
                        </div>
                    </div>
                    {/* FIM: Seção da agenda */}

                </div>
                {/* FIM: Área formulário + agenda */}
            </div>
            {/* FIM: Container principal */}
        </div>
    )
}

export default Consulta;
