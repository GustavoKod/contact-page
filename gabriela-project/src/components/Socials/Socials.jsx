import './Socials.css'
import { FaFacebook, FaInstagram, FaAddressBook, FaWhatsapp, FaMailBulk } from 'react-icons/fa'

const Socials = () => {
    const redesSociais = [
        { id: 1, nome: 'Facebook', link: 'https://www.facebook.com/gabriela.kodamadigital', icon: <FaFacebook className='FB'/> },
        { id: 2, nome: 'Instagram', link: 'https://www.instagram.com/kodama.digital', icon: <FaInstagram  className='INS'/> },
        { id: 3, nome: 'Formulário de Briefing', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdNg7KFb1z7S-cKBG5DnEWwWNuMSWXy5RDTldBCQ0l8W-P0tw/viewform', icon: <FaAddressBook className='BRI'/> }
    ];

    const listaRedesSociais = redesSociais.map((item) =>
        <div key={item.id} className='content'>
            <a className='redeS' href={item.link} target='_blank'>{item.icon}{item.nome}</a>
        </div>
    )

    return (
        <div>
            <h3>Redes Sociais</h3>
            {listaRedesSociais}

            <ul>
                <li><strong>Contatos: </strong></li>

                <li>
                    <span><FaWhatsapp className='WPP'/></span>
                    <a href="https://wa.me/5518996038559">(18) 99603-8559</a>
                </li>

                <li>
                    <span><FaMailBulk className='MAIL'/></span>
                    <a href="mailto:contato@kodamadigital.com">Email: contato@kodamadigital.com</a>
                </li>

                <li>
                    <strong>
                        Meus horários de atendimento:
                    </strong>
                </li>

                <li>Segunda à sexta-feira - 9h às 18h<br />Sábado e domingo - fechado</li>
            </ul>

        </div>
    );
};

export default Socials;
