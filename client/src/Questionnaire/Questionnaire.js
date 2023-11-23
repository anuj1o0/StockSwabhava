import React, { useState } from 'react';
import "./Questionnaire.css"

const Questionnaire = () => {
  const [step, setStep] = useState(0); // Initially set step to 0
  const [answers, setAnswers] = useState({});

  const questionnaireData = [
   
    {
        "step": 1,
        "title": "Step 1: Financial Goals and Risk Perception",
        "questions": [
            {
                "question": "What is your primary aim with your investments: building wealth for the future or exploring opportunities for the short term?",
                "options": ["Building wealth for the future", "Exploring opportunities for the short term"],
                
            },
            {
                "question": "How comfortable are you with the idea of potential losses for the chance of higher gains in your investments?",
                "options": ["Prefer avoiding potential losses", "Willing to accept potential losses for higher gains"],
                
            },
            {
                "question": "Are you more inclined toward short-term gains or long-term, stable growth for your investments?",
                "options": ["Inclined towards long-term, stable growth", "Inclined towards short-term gains"],
                
            },
            {
                "question": "Considering market volatility, would you be more likely to sell off your investments or hold onto them?",
                "options": ["More likely to hold onto investments", "More likely to sell off during volatility"],
                
            },
            {
                "question": "Do you have a specific time frame in mind for achieving your investment goals?",
                "options": ["Have a clear time frame for goals", "No specific time frame in mind"],
                
            }
        ]
    },
    {
        "step": 2,
        "title": "Step 2: Personal Financial Approach and Decision Making",
        "questions": [
            {
                "question": "When faced with financial uncertainty, do you usually rely on careful analysis or trust your intuition and gut feeling?",
                "options": ["Rely on careful analysis", "Trust intuition more than analysis"],
                
            },
            {
                "question": "How do you perceive and manage stress or pressure when it comes to financial decisions?",
                "options": ["Manage stress well and stay composed", "Feel significant pressure and stress"],
                
            },
            {
                "question": "Are you more focused on growing your investments or securing your current savings and financial stability?",
                "options": ["More focused on securing current savings", "Focus on growing investments"],
                
            },
            {
                "question": "In your decision-making process, how much weight do you place on expert advice and market analysis?",
                "options": ["Give significant weight to expert advice and analysis", "Rely less on expert advice and analysis"],
                
            },
            {
                "question": "How do you react to sudden changes or unexpected events in the financial landscape?",
                "options": ["Find it difficult to cope with sudden changes", "Adapt and adjust to changes effectively"],
                
            }
        ]
    },
    {
        "step": 3,
        "title": "Step 3: Risk Preferences and Investment Strategy",
        "questions": [
            {
                "question": "What level of financial risk feels acceptable to you given your present financial situation?",
                "options": ["Prefer lower risks", "Willing to take higher risks"],
                
            },
            {
                "question": "When considering investments, do you lean more towards high potential returns or prefer stability and lower risk?",
                "options": ["Prefer stability and lower risk", "Lean towards high potential returns"],
                
            },
            {
                "question": "How comfortable are you with the idea of the value of your investments fluctuating over time?",
                "options": ["Uncomfortable with fluctuations", "Comfortable with fluctuations"],
                
            },
            {
                "question": "In uncertain market conditions, what guides your decision-making: careful analysis or a more intuitive, quick response?",
                "options": ["Decision guided by careful analysis", "Decision guided more by intuition and quick response"],
                
            },
            {
                "question": "How open are you to exploring new or alternative investment ideas and strategies?",
                "options": ["Not very open to exploring new strategies", "Very open to exploring new strategies"],
                
            }
        ]
    }  

];

  const handleNext = () => {
    if (step < questionnaireData.length - 1) {
      setStep(step + 1);
    }
  };

  const handleChange = (questionIdx, option) => {
    setAnswers({ ...answers, [`step${step + 1}`]: { ...answers[`step${step + 1}`], [`question${questionIdx + 1}`]: option } });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/submit-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // Display the result received from the backend
      // Update state or display result on the page
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {step < questionnaireData.length && (
        <div>
          <h2>{questionnaireData[step].title}</h2>
          {questionnaireData[step].questions.map((question, idx) => (
            <div key={idx}>
              <p>{question.question}</p>
              {question.options.map((option, optIdx) => (
                <label key={optIdx}>
                  <input
                    type="radio"
                    name={`question${idx + 1}`}
                    value={option}
                    onChange={() => handleChange(idx, option)}
                    checked={answers[`step${step + 1}`]?.[`question${idx + 1}`] === option}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === questionnaireData.length && (
        <div>
          <h2>Thank you for completing the questionnaire!</h2>
          {/* Display the result or any summary here */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
