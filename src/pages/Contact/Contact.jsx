import { database } from "../../services/firebase";
import { getDatabase, ref, set, push } from "firebase/database";

import { useState } from 'react'
import styles from './contact.module.css'

function Contact() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[mensagem, setMensagem] = useState('')

    function handleInputValueNome(event){
        setNome(event.target.value)
    }

    function handleInputValueEmail(event){
        setEmail(event.target.value)
    }

    function handleInputValueMensagem(event){
        setMensagem(event.target.value)
    }

    function handleCreateMessage(event) {
        event.preventDefault()

        const messagesListRef = ref(database, 'messages')
        const newMessageRef = push(messagesListRef)

        set(newMessageRef, {
            text: mensagem, 
            email: email, 
            name: nome 
        })

        setMensagem('')
        setNome('')
        setEmail('')
    }

    return(
        <div className={styles.headerContainer}>
        <div>
            <h1>Gente, vamos entrar em contato?¹</h1>
            <p>a melhor forma ainda é por aqui ó <span id={styles.email}><a href="mailto:mluasantos@gmail.com" target="_blank">mluasantos@gmail.com</a></span>, mas você pode preencher os campos abaixo, porque o Real Time Database tá ON</p>
        </div>
        <div className={styles.formContainer}>
            <form onSubmit={handleCreateMessage} className={styles.form}>
                <input 
                type='text'
                onChange={handleInputValueNome} 
                className={styles.formInput} 
                placeholder="Digite seu nome"
                value={nome}
                />
                <input 
                type='email'
                onChange={handleInputValueEmail} 
                className={styles.formInput} placeholder="Digite seu email" 
                value={email}
                />
                <input 
                type='text'
                onChange={handleInputValueMensagem} 
                className={styles.formTextArea} placeholder="Digite sua mensagem"
                value={mensagem}
                /> 
                <button 
                className={styles.formButton} 
                type="submit" >Enviar mensagem
                </button>
            </form>
        </div>
        <p>1 Referência ao ícone Eleni dos almoços do TikTok</p>
        </div>
    )
}

export default Contact