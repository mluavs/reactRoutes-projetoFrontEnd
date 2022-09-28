import styles from './comments.module.css'
import commentImg from '../../assets/comment-img.svg'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'


function Comments () {
    const getLocalStorage = () => {
        let items = localStorage.getItem('list') //isso aqui é do JavaScript e essa list é diferente da list abaixo

        if(items) {
            return JSON.parse(localStorage.getItem('list'))
        } else {
            return []
        } 
        
    }

    const [list, setList] = useState ([])
    const [task, setTask] = useState ('')
    
    
    function handleInput(event) {
        setTask(event.target.value)
    }

    function handleCreateTask() {
        const newTask = {
            id: nanoid(),
            title: task
        }

        if(newTask.title === '') {
            return
        }

        setList([...list, newTask]) //spread operator 

        setTask('')

    }

    function handleRemoveTask(id) {
        const tasksFiltered = list.filter(item => item.id !== id)
        setList(tasksFiltered)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return(
        <div className={styles.commentsContainer}>
        <div className={styles.header}>
            <h1>Gente, vamos fazer uma lista de tarefas <span className={styles.italic}>de levinho </span>aqui?</h1>
            <p>Tá, aqui vale uma explicação! Essa aqui é uma simulação (alô Matrix), você escreve um pedacinho de texto ali naquele quadrinho e aperta o botão rosa e teus escritos aparecem na página, mas --aí é que tá-- por enquanto ninguém vai saber disso além de você e do seu LocalStorage. Ah, pra que um determinado escrito seja apagado, também tem todo um rolê maneiro acontecendo por baixo dos panos do React e eu acho isso muito legal.</p>
        </div>
        <div className={styles.inputContainer}>
            <input 
            className={styles.input} 
            type="text" 
            placeholder="Digite aqui!" 
            onChange={handleInput}
            value={task}
            />
        </div>
        <div className={styles.addContainer}>
            <button className={styles.addTask}><FiPlus size={16} color="#fff" onClick={handleCreateTask} /></button>
        </div>
        <main>
            <ul className={styles.listItems}>
                {list.map(item => {
                    return(
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <button className={styles.removeTask} onClick={() => handleRemoveTask(item.id)}>
                                <FiTrash2 size={16} />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
        </div>
    )
}

export default Comments