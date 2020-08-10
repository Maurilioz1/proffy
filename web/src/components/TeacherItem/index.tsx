import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Foto" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost},00</strong>
                </p>
                <a href={`http://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={createNewConnection}>
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;