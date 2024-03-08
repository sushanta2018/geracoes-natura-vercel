import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

const ProfileTestProviderContext = createContext();

export function useProfileTestProvider() {
  return useContext(ProfileTestProviderContext);
}

export default function ProfileTestProvider({ children }) {
  const questions = [
    {
      text: "Você já atuou ou atua vendendo algum tipo de produto?",

      type: "radio",
      options: [
        "Nunca atuei",
        "Já, mas por pouco tempo",
        "Sim. É a minha principal fonte de renda hoje",
      ],
    },
    {
      text: "Qual seria o papel da consultoria na sua vida?",
      hint: "Marque quantas opções quiser",
      type: "checkbox",
      options: [
        "Ganhar um dinheiro extra",
        "Ganhar desconto",
        "Possibilidade de empreender",
        "Ampliar minha influência nas redes sociais",
        "Aprendizado",
      ],
    },
    {
      text: "Quanto tempo você imagina dedicar para a consultoria?",
      type: "radio",
      options: [
        "Menos de 1h por semana",

        "6h a 8h por semana",
        "1h a 5h por semana",
        "2 a 3 dias por semana",
        "Será minha principal atividade",
      ],
    },
    {
      text: "Como você prefere aprender sobre produtos e técnicas de vendas?",
      hint: "Marque quantas opções quiser",
      type: "checkbox",
      options: [
        "Participando de treinamentos online mais curtos e interativos",
        "Fazendo cursos formais sobre empreendedorismo e vendas",
        "Assistindo vídeos de tutoriais e interagindo com comunidades online de entusiastas de beleza",
      ],
    },
    {
      text: "Você usaria suas redes sociais para vender produtos?",
      type: "radio",
      options: [
        "Não muito. Eu uso ocasionalmente, principalmente para interagir com amigos.",
        "Sim, eu uso regularmente e entendo o básico de como funciona para negócios.",
        "Sim. Eu sou ativa em várias plataformas e adoro compartilhar meu estilo e interesses.",
      ],
    },
    {
      text: "Qual é o seu estilo de comunicação preferido?",
      type: "radio",
      options: [
        "Sou uma pessoa mais reservada e prefiro mensagens escritas.",
        "Sou uma pessoa mais comunicativa e gosto de interagir pessoalmente ou por telefone.",
        "Sou uma pessoa extrovertida e adoro fazer vídeos e lives para me conectar com os outros.",
      ],
    },
    {
      text: "Qual dessas características você acha mais importante para vender produtos?",
      type: "radio",
      options: [
        "Se adaptar e aprender sempre.",
        "Organização e gestão do tempo.",
        "Criatividade e capacidade para se destacar nas redes sociais.",
      ],
    },
  ];

  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill([])
  );
  const [continueDisabled, setContinueDisabled] = useState(true);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      // Clone the previous state
      const newSelectedOptions = [...prevSelectedOptions];

      // Check if we're dealing with radio or checkbox input
      if (questions[currentQuestion].type === "radio") {
        // For radio buttons, only one option can be selected
        newSelectedOptions[currentQuestion] = [option];
      } else if (questions[currentQuestion].type === "checkbox") {
        // For checkboxes, toggle the presence of the option in the array
        const currentOptions = newSelectedOptions[currentQuestion] || [];
        const index = currentOptions.indexOf(option);

        if (index !== -1) {
          // Option is currently selected, remove it from the array
          newSelectedOptions[currentQuestion] = [
            ...currentOptions.slice(0, index),
            ...currentOptions.slice(index + 1),
          ];
        } else {
          // Option is not selected, add it to the array
          newSelectedOptions[currentQuestion] = [...currentOptions, option];
        }
      }

      // Enable the continue button if any option is selected
      setContinueDisabled(newSelectedOptions[currentQuestion].length === 0);

      return newSelectedOptions;
    });
  };

  const determineProfile = () => {
    let versatilCount = 0;
    let realizadorCount = 0;
    let criativoCount = 0;

    // Logic to count the options selected for each profile trait
    selectedOptions.forEach((answerArray, questionIndex) => {
      // Assume the answerArray contains the text of the selected options for radio
      // and an array of selected options for checkbox type questions
      if (questions[questionIndex].type === "radio") {
        const answer = answerArray[0]; // since it's a single choice
        if (
          answer === "Se adaptar e aprender sempre." ||
          answer === "1 a 5h por semana"
        ) {
          versatilCount++;
        } else if (
          answer === "Organização e gestão do tempo." ||
          answer === "6h a 8h por semana"
        ) {
          realizadorCount++;
        } else if (
          answer ===
            "Criatividade e capacidade para se destacar nas redes sociais." ||
          answer === "2 a 3 dias por semana"
        ) {
          criativoCount++;
        }
      } else if (questions[questionIndex].type === "checkbox") {
        // Since it's multiple choice, loop through the array
        answerArray.forEach((checkboxAnswer) => {
          if (
            checkboxAnswer === "Ganhar um dinheiro extra" ||
            checkboxAnswer === "Aprendizado"
          ) {
            versatilCount++;
          } else if (
            checkboxAnswer === "Possibilidade de empreender" ||
            checkboxAnswer === "Ganhar desconto"
          ) {
            realizadorCount++;
          } else if (
            checkboxAnswer === "Ampliar minha influência nas redes sociais"
          ) {
            criativoCount++;
          }
        });
      }
    });

    // Determine which profile has the highest count
    if (versatilCount > realizadorCount && versatilCount > criativoCount) {
      return "profileversatile";
    } else if (
      realizadorCount > versatilCount &&
      realizadorCount > criativoCount
    ) {
      return "profilerealizer";
    } else if (
      criativoCount > versatilCount &&
      criativoCount > realizadorCount
    ) {
      return "profilecreative";
    } else {
      // Handle a tie or another default case as needed
      // For now, return 'profileversatile' as a default case
      return "profileversatile";
    }
  };

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setContinueDisabled(true);
    } else {
      // When the test is completed, determine the profile and redirect
      const profilePage = determineProfile(selectedOptions);
      // Redirect to the profile page, e.g., using React Router

      router.push("/test-analyzing");

      setTimeout(() => {
        router.push(`/${profilePage}`);
        setCurrentQuestion(0);
        setSelectedOptions(Array(questions.length).fill([]));
        setContinueDisabled(true);
      }, 3000);
    }
  };

  const progressWidth = ((currentQuestion + 1) / questions.length) * 100 + "%";

  const value = {
    progressWidth,
    handleContinue,
    handleOptionChange,
    continueDisabled,
    questions,
    currentQuestion,
    selectedOptions,
  };

  return (
    <ProfileTestProviderContext.Provider value={value}>
      {children}
    </ProfileTestProviderContext.Provider>
  );
}
