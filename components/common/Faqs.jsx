import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faqs = () => {
  return (
    <div className="faq-svg">
      <Accordion isCompact>
        <AccordionItem
          key="1"
          aria-label="4"
          title="O que eu ganho sendo consultora?"
          className="focus:outline-none outline-none font-OfeliaMedium bg-white p-4  sm:px-6 rounded-[20px] border-0 text-[16px]  sm:text-[20px] font-medium  my-2"
        >
          <div className="bg-white font-normal font-OfeliaNormal pb-4 pt-8">
            <p>
              A consultoria Natura e Avon oferece cinco diferentes faixas de
              lucro:{" "}
              <span className="font-OfeliaMedium font-medium">
                20%, 30%, 32%, 35% e 38%.
              </span>
              <br /> Além disso, ao fazer parte da maior Consultoria de Beleza
              do Brasil, você tem acesso a:
              <br /> ·{" "}
              <span className="font-OfeliaMedium font-medium">
                Treinamentos, cursos e trilhas de aprendizagem:
              </span>{" "}
              a gente realmente se preocupa com o seu crescimento e
              desenvolvimento! Temos conteúdos gratuitos em diferentes formatos
              para você evoluir na consultoria e nos planos da sua vida;
              <br /> ·{" "}
              <span className="font-OfeliaMedium font-medium">
                Bolsas de estudo pra você e sua família:
              </span>{" "}
              estudar abre portas e muda realidades. Por isso, somos parceiros
              de instituições de ensino para oferecer bolsas de estudo para você
              e sua família <br />·{" "}
              <span className="font-OfeliaMedium font-medium">
                Ferramentas digitais:
              </span>{" "}
              ao se cadastrar, você terá seu espaço digital, revista interativa,
              imagens e vídeos prontos para divulgação, e um app ágil para você
              ter tudo isso na palma da mão
              <br /> ·{" "}
              <span className="font-OfeliaMedium font-medium">
                Emana Pay:
              </span>{" "}
              uma conta digital sem anuidade para você receber suas vendas,
              fazer pix, pagar boletos e usar cartão de crédito.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Quais são as formas de venda?"
          className="bg-white p-4 font-OfeliaMedium sm:px-6 rounded-[20px] border-0 text-[16px]  sm:text-[20px] font-medium  my-2"
        >
          <div className="bg-white font-normal font-OfeliaNormal pb-4 pt-8">
            <p className="font-normal">
              Você pode vender de forma&nbsp;
              <span className="font-bold">digital</span> ou
              <span className="font-bold">&nbsp;presencial</span>.
            </p>
            <p className="my-3">
              A venda{" "}
              <span className="font-OfeliaMedium font-medium"> digital</span>{" "}
              acontece assim: você tem sua própria loja virtual! Seus clientes
              compram direto por ela e e o produto chega na casa deles, sem
              passar por você. Você recebe seu lucro e ainda pode vender para
              todo o Brasil que a Natura entrega ;) Se o seu cliente não tiver
              facilidade de fazer compras online, não tem problema: você pode
              fazer a compra por ele e ele recebe em casa, do mesmo jeito.
            </p>
            <p className="my-3">
              á a venda{" "}
              <span className="font-OfeliaMedium font-medium">presencial</span>{" "}
              é a mais tradicional: seu cliente escolhe os produtos a partir da
              revista física ou virtual, você faz o pedido, os produtos chegam
              na sua casa e você entrega para o cliente. Outra opção é montar um
              estoque em casa e vender a partir dele.
            </p>
            <p className="my-3 text-[12px]">
              Em breve a modalidade de vendas digitais também estará disponível
              para produtos Avon.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Tenho que vender uma quantidade mínima por mês?"
          className="bg-white p-4  sm:px-6 font-OfeliaMedium rounded-[20px] border-0 text-[16px]  sm:text-[20px] font-medium  my-2"
        >
          <div className="bg-white font-normal font-OfeliaNormal pb-4 pt-8">
            <p className="my-3">
              Não! Você não tem a obrigação de comprar ou vender nenhuma
              quantidade mínima por mês. Mas atenção: seus lucros dependem do
              seu volume de vendas e, para manter seu cadastro ativo, você não
              pode ficar mais de 6 ciclos (cerca de 120 dias) sem fazer pedidos.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="Preciso entregar os produtos?"
          className="bg-white p-4 font-OfeliaMedium  sm:px-6 rounded-[20px] border-0 text-[16px]  sm:text-[20px] font-medium  my-2"
        >
          <div className="bg-white font-normal font-OfeliaNormal pb-4 pt-8">
            <p className="my-3">
              Vendendo presencialmente, sim. Vendendo de forma digital, não!
              Quando você vende pela sua loja virtual, seus clientes podem
              escolher produtos, selecionar a forma de pagamento e receber os
              pedidos direto em casa. Com as vendas digitais, você não precisa
              entregar! <br /> E tem uma notícia ainda melhor: Dessa forma, você
              pode lucrar vendendo para todo o Brasil sem sair de casa, pois a
              Natura entrega os pedidos para você!
            </p>
            <p className="text-[12px]">
              {" "}
              Em breve a modalidade de vendas digitais também estará disponível
              para produtos Avon
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          title="Quais as outras fontes de renda posso ter com a Consultoria de Beleza, além da venda de produtos?"
          className="bg-white p-4 sm:px-6 !font-OfeliaMedium rounded-[20px] border-0 text-[16px]  sm:text-[20px] !font-medium  my-2"
        >
          <div className="bg-white font-normal font-OfeliaNormal pb-4 pt-8">
            <p className="my-3">
              A Natura e Avon são uma oportunidade de carreira!
              <br /> <br /> Além das vendas, podemos convidar você para atuar
              com influência nas redes sociais, criar conteúdos digitais e dar
              treinamentos.
              <br /> <br /> Esses outros papéis também são remunerados.
              <br /> <br />O primeiro passo é se cadastrar para a consultoria!
              <br /> <br />O resto a gente explica no caminho.
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
