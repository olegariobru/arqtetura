import MenuLink from '../MenuLink'
import styles from './bannerStep.module.css'
import { FaArrowTurnDown } from "react-icons/fa6"

export default function bannerStep(){
    return(
        <div>

            <div className={styles.StepTit} data-aos="fade-up" data-aos-delay="200">
                    <h1 className={styles.stepToStepNosso}><MenuLink to="/">Nosso passo a passo</MenuLink></h1>
            </div>

            <div className={styles.steps} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.steps1}>
                    <h1 className={styles.titStep1}>1° Fase de Concepção e Planejamento</h1>
                    <p className={styles.descStep1}>
                        Nesta fase inicial, o arquiteto e o cliente discutem as necessidades, desejos e expectativas para o projeto. São realizadas análises do terreno, levantamento de informações e estudos preliminares. O arquiteto elabora um conceito inicial e o apresenta ao cliente para aprovação.
                    </p>
                </div>
    
                <div className={styles.steps1}>
                    <h1 className={styles.titStep1}>2° Desenvolvimento do Projeto e Aprovações</h1>
                    <p className={styles.descStep1}>
                        Com o conceito aprovado, o arquiteto detalha o projeto, definindo materiais, técnicas construtivas e sistemas a serem utilizados. Nesta fase, também são feitas revisões, ajustes necessários e a obtenção das aprovações legais junto aos órgãos competentes. O projeto executivo é finalizado, contendo todos os detalhes necessários para a construção.
                    </p>
                </div>
    
                <div className={styles.steps1}>
                    <h1 className={styles.titStep1}>3° Execução e Acompanhamento da Obra</h1>
                    <p className={styles.descStep1}>
                        A fase final envolve a execução da obra, onde o arquiteto acompanha de perto a construção para garantir que tudo esteja sendo realizado conforme o projeto aprovado. Isso inclui visitas regulares ao canteiro de obras, resolução de problemas em tempo real e a garantia de que o cronograma e o orçamento sejam seguidos. A obra é finalizada com a entrega do projeto concluído ao cliente.
                    </p>
                </div>

                <div className={styles.iconeStep}>
                    <FaArrowTurnDown color='gray' size={'25'} />
                    <FaArrowTurnDown color='gray' size={'25'} />
                    <FaArrowTurnDown color='gray' size={'25'} />
                </div>

                <div className={styles.steps1}>
                    <h1 className={styles.titStep1}>4° Finalização e entrega da obra</h1>
                    <p className={styles.descStep1}>
                        Nesta fase, são realizados os últimos ajustes e acabamentos, assegurando que todos os detalhes estejam de acordo com o projeto aprovado. O arquiteto faz uma revisão final do trabalho, garantindo que tudo esteja em conformidade com as especificações. Após a inspeção e aprovação final, a obra é entregue ao cliente, com toda a documentação necessária, concluindo assim o processo com a entrega do projeto pronto para uso.
                    </p>               
                </div>
            </div>



        </div>    
    )
}